provider "aws" {
  profile = "personal" #use my personal, not work, profile
  region  = "us-east-1"
}

# Create S3 bucket for hosting static website
resource "aws_s3_bucket" "bucket" {
  bucket        = var.bucket_name
  force_destroy = true
  tags = {
    Name = var.bucket_name
  }
}

resource "aws_s3_bucket_website_configuration" "static_website" {
  bucket = aws_s3_bucket.bucket.bucket
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket                  = aws_s3_bucket.bucket.id
  ignore_public_acls      = false
  block_public_acls       = false
  restrict_public_buckets = false
  block_public_policy     = false
}


# Configure S3 bucket policy for public read access
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json

  depends_on = [aws_s3_bucket_public_access_block.public_access_block]
  # Without dependency, I was having an issue where I was denied permission
  # to attach a policy to the bucket, since it was trying to do that
  # before enabling all public access. Hence the depends_on argument.
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    sid    = "PublicReadGetObject"
    effect = "Allow"
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${var.bucket_name}/*"]
  }
}

output "website_endpoint" {
  description = "The website endpoint."
  value       = "http://${aws_s3_bucket_website_configuration.static_website.website_endpoint}"
}

output "website_domain" {
  description = "Domain of the website endpoint. This is used to create Route 53 alias records."
  value       = aws_s3_bucket_website_configuration.static_website.website_domain
}


# resource "aws_s3_object" "index" {
#   for_each = fileset("../katnmatt", "**/*")

#   bucket = aws_s3_bucket.bucket.id
#   key    = each.value
#   source = "../katnmatt/${each.value}"
# }



# Create ACM certificate for the CloudFront distribution
# resource "aws_acm_certificate" "ssl_certificate" {
#   domain_name       = "katnmatt.live" # Replace with your domain name
#   validation_method = "DNS"
# }

# # Create CloudFront distribution
# resource "aws_cloudfront_distribution" "website_distribution" {
#   origin {
#     domain_name = aws_s3_bucket_website_configuration.static_website.regional_domain_name
#     origin_id   = "S3Origin"
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   comment             = "Website distribution"
#   default_root_object = "index.html"

#   aliases = ["katnmatt.live"] # Replace with your domain name

#   default_cache_behavior {
#     target_origin_id       = "S3Origin"
#     viewer_protocol_policy = "redirect-to-https"
#     allowed_methods        = ["GET", "HEAD", "OPTIONS"]
#     cached_methods         = ["GET", "HEAD"]
#     forwarded_values {
#       query_string = false
#       cookies {
#         forward = "none"
#       }
#     }
#   }

#   viewer_certificate {
#     acm_certificate_arn = aws_acm_certificate.ssl_certificate.arn
#     ssl_support_method  = "sni-only"
#   }

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }
# }
