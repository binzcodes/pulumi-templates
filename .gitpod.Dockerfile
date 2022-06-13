# FROM gitpod/workspace-full:latest
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2022-05-08-14-31-53

# install Pulumi
RUN curl -fsSL https://get.pulumi.com | sh

# Add Pulumi to the $PATH
ENV PATH="${PATH}:/home/gitpod/.pulumi/bin"
