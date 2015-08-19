#! /bin/bash

separator="";

for f in ../img/*.[jJ][pP][gG]; do
#	echo "processing $f";
	gm identify $f -format "$separator{ src: 'img/%f', w: %w, h: %h }"
	separator=","
done
