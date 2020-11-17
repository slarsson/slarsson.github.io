#!/bin/bash

# add a .nojekyll path to all dirs in public/
find $PWD/public -type d | while read -r path ; do
    echo "add .nojekyll to: $path"
    touch $path/.nojekyll
done