terraform {
  backend "s3" {
    region         = "us-east-1"
    bucket         = "katrina-tfstate"
    key            = "katnmatt/terraform.tfstate"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}
