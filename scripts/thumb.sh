#!/usr/bin/env bash
# Extract thumbnail from video

ffmpeg -ss ${2:-0} -y -i $1 -r 1 -updatefirst 1 -frames 1 $(basename $1).jpg
