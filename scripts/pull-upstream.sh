#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/dam-schema"
METADATA_SCHEMA_COMMIT=$(cd ../metadata-schema && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
	--tab \
	--arg met_commit "$METADATA_SCHEMA_COMMIT" \
	'
	.peerDependencies["@dsbunny/metadata-schema"]	= "github:dsbunny/metadata-schema"			|
	.devDependencies["@dsbunny/metadata-schema"]	= ("github:dsbunny/metadata-schema#" + $met_commit)
	' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json
