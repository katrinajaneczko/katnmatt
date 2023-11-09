## Happy birthday, Matt! 🎂
This is a birthday present for my boyfriend :)
Go to [bday.katnmatt.live](http://katnmatt.s3-website-us-east-1.amazonaws.com/) to check it out.

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

