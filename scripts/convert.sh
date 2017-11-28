#!/usr/bin/env bash
# Convert and truncate a video

ffmpeg -i $1 -t 00:00:0$2 -async 1 -an converted_$1
