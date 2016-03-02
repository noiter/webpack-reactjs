# FROM iojs:2

# This will cd to the project root when docker starts in bash
# CMD sh -c "cd ${PROJECT_PATH:-/}; exec /bin/bash"

FROM iojs:onbuild

# Expose the ports that your app uses. For example:
EXPOSE 8080
