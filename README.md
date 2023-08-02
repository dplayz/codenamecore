
<img src="" align="left"
     alt="dplayz/codenamecore" width="125" height="125">
### Codenamed "Core"
An experimental Hugo theme for personal usage

---

# Motivation
I want to create a site that looks like our previous site wayback we still use WordPress, at the same time, implement some features that I'm in control.

# Usage
1. Clone the repo as site submodule  
   SSH: ``git submodule add themes/codenamecore git@github.com/dplayz/codenamecore.git``  
   HTTPS: ``git submodule add themes/codenamecore https://github.com/dplayz/codenamecore.git``
2. Installing the [dependencies](#dependencies) that is required to installed.
3. Initializing the submodule  
   ``git submodule update --init``
4. Building the site:  
   Build once: ``hugo <desired parameters here>``  
   Live build: ``hugo server <desired parameters here>``  

A reference implementation sites can be seen here: 
- https://dplayzgames06.tk
- https://worldofsteelcraft.tk

# Versioning
This project follows Calendar versioning, using this format:
```
XXXX.YyZZ.Vv
Example: 2023.802.0, 2023.1231.2

X - Year of the publication
Y - Month of the publication
Z - Day of the publication
V - Count of the release during the publication 
```

# Contributors
For now, the sole contributor of this project is [dplayz](https://github.com/dplayz), but future contributions is accepted and will be acknowledged.  
See [CONTRIBUTION.md](./blob/main/CONTRIBUTION.md) to be a contributor

# Dependencies
- gohugoio/hugo - Hugo Static Site Generator
- staticJsCMS/static-cms - StaticCMS
- francoischalifour/medium-zoom - Medium Zoom library

