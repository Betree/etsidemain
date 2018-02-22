#!/usr/bin/env bash
# Convert and truncate a video

ffmpeg -i $1 -t 00:00:0$2 -async 1 -f mp4 -vcodec libx264 -an $1_converted.mp4
