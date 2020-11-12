#!/bin/bash
#thanks anirban (:

set -e

die () {
  echo >&2 "$@"
  exit 1
}

[ "${#}" -eq 2 ] || die "Usage: ./fix-sql-dump.sh <INPUT.sql> <OUTPUT.sql>"

sed -E 's/int\([0-9]+\) NOT NULL AUTO_INCREMENT/SERIAL/g' $1 | # Use bigint SERIAL for auto incrementing IDs
  sed -E 's/(".+Id") int\([0-9]+\)/\1 bigint/g' |              # Use bigint for things that seem like IDs
  sed -E 's/int\([0-9]+\)/int/g' |                             # Just use int instead of int(11)
  sed -E 's/UNIQUE KEY ".+" (\(".+"\))/UNIQUE \1/g' |          # Change UNIQUE KEY to UNIQUE
  sed -E "s/\\\'/\'\'/g" |                                     # Use '' instead of /'
  sed -E '/KEY ".+" \(.+\)/d' |                                # The KEY statements are redundant
  sed -e ':a' -e 'N' -e '$!ba' -e 's/,\n);/\n);/g' |           # Delete trailing commas in CREATE TABLE
  sed -E "s/\ DEFAULT\ '0000-00-00'//g" > $2                   # 0000-00-00 is not a valid date, just get rid of default
