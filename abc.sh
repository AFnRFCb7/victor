#!/bin/sh

seq 1 $1 | while read -r INDEX
do
	echo Hello $INDEX
done
