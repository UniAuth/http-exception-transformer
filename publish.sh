#!/bin/bash
mkdir publish

cp package.json publish/
cp LICENSE publish/
cp -r dist/src/lib/* publish/
cp README.md publish/
