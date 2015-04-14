# hapi-ninja-bp-recreated
A hapi boilerplate (re)created from scratch, based on the hapi-ninja boilerplate. This was done for the purpose of learning structure and hapi fundamentals.

Instead of forking and copying much of the source, this project was assembled from scratch to gain understanding of each piece individually, as well as what components are fundamental to common robust web servers.

## Goals
At the onset, some goals in mind were to gain experience with the following components:
* Project Folder Structure
* Hapi
    - named routes
    - asset management
* Config (dev, production asset use)
* Route Configuration (best practice)
* Gulp
* Logging (good, console & file)

### TODO
* assets

## Notes
* hapi-ninja
    - while implementing a partial with swig (using include; perhaps this is an incorrect way to do so), I tried to set the partialsPath option under server.views, hoping the server would use that to locate the partial html file (and not have to create a route path for it like hapi-ninja did). however that didn't work, couldn't find the file. followed hapi-ninja's method, which of course worked.
* logging: good
    - I liked the granularity of configuration, for which messages to logging
    - as well, where to log those (console, file, http)
* assets
    - I like the assets management done in the hapi ninja boilerplate, but prefered one subtle differenc
        + to store the assets.js file in the server assets folder. seemed like a more logical place for it (although I be overlooking some reason for keeping it in the project root)
* Routes, I chose to name a folder 'controllers' instead of 'base'. Seemed to make more sense, but should determine what a best practice here is.