## Happy birthday, Matt! 🎂
This is a birthday present for my boyfriend :)
Go to [bday.katnmatt.live](http://katnmatt.s3-website-us-east-1.amazonaws.com/) to check it out.

## A Note
You might think making you a website is the gift, but really, the gift is this repo. Remember when you said you'd be interested in possibly learning Terraform, AWS, and CI/CD sometime over you winter break? Well, I created this repo mostly so I could walk you through it and how you could do it yourself. However, I know homework is maybe not the best birthday gift, so if you want nothing to do with it, you can just consider the site your gift. But when you're ready to learn more about this project, I'll be happy to use it to teach you some more skills for your resume. Happy birthday!

## Features
* Static website (HTML, CSS, JavaScript)
  * Relies on client-side processing, reducing need for server-side logic
  * Faster load times and simplified maintenance
* Hosted on AWS Simple Storage Service (S3), a scalable object storage service
  * Serverless nature of S3 helps keep hosting costs low
* Terraform, an Infrastructure as Code (IaC) tool, is used for resource management
  * Allows for the provisioning and configuration of AWS resources in a declarative manner
  * Backend configured with S3 bucket for state storage and DynamoDB table for state locking
* Custom domain registered with GoDaddy
  * DNS records are configured to point the custom domain to the AWS S3 bucket
* CI/CD implemented with GitHub Actions
  * Changes are deployed automatically when a push is made to the main branch
  * Ensures efficient updates and reduces manual intervention

## TODO:
- [ ] HTTPS Support (potentially via CloudFront): The project may utilize Amazon CloudFront, AWS's content delivery network (CDN), to enable HTTPS support. This would add an extra layer of security and performance by caching content globally. However, S3 does not support HTTPS automatically.
- [x] Add an icon! --> ```<link rel="icon" type="image/png" href="pics/favicon.png">``` to head
- [ ] Add unit and/or integration tests and run with a GitHub Action.
- [ ] Fix the GitHub Action step that checks if any files *other* than the README or .github directory were changed, and only *then* run the upload task.

