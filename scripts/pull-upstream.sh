#!/bin/bash
# This script pulls the latest changes from the upstream repository's main branch
# and merges them into the current branch.

set -e

UPSTREAM_REPO_PATH="../melanie/packages/dam-schema"
ERROR_SCHEMA_COMMIT=$(cd ../error-schema && git rev-parse --short HEAD)
METADATA_SCHEMA_COMMIT=$(cd ../metadata-schema && git rev-parse --short HEAD)
NET_SCHEMA_COMMIT=$(cd ../net-schema && git rev-parse --short HEAD)
PATCH_SCHEMA_COMMIT=$(cd ../patch-schema && git rev-parse --short HEAD)
ROBUST_TASK_SCHEMA_COMMIT=$(cd ../robust-task-schema && git rev-parse --short HEAD)
WEBHOOK_SCHEMA_COMMIT=$(cd ../webhook-schema && git rev-parse --short HEAD)
ZOD_REGISTRY_COMMIT=$(cd ../zod-registry && git rev-parse --short HEAD)

rsync -av --delete "$UPSTREAM_REPO_PATH/src/." "src/."
rsync -av --delete \
	"$UPSTREAM_REPO_PATH/CHANGELOG.md" \
	"$UPSTREAM_REPO_PATH/LICENSE" \
	"$UPSTREAM_REPO_PATH/package.json" \
	"$UPSTREAM_REPO_PATH/README.md" \
	"$UPSTREAM_REPO_PATH/ROADMAP.md" \
	"$UPSTREAM_REPO_PATH/tsconfig.json" \
	"."

jq \
	--tab \
	--arg error_commit "$ERROR_SCHEMA_COMMIT" \
	--arg metadata_commit "$METADATA_SCHEMA_COMMIT" \
	--arg net_commit "$NET_SCHEMA_COMMIT" \
	--arg patch_commit "$PATCH_SCHEMA_COMMIT" \
	--arg robust_task_commit "$ROBUST_TASK_SCHEMA_COMMIT" \
	--arg webhook_commit "$WEBHOOK_SCHEMA_COMMIT" \
	--arg registry_commit "$ZOD_REGISTRY_COMMIT" \
	'
	.peerDependencies["@dsbunny/error-schema"]		= "github:dsbunny/error-schema"					|
	.peerDependencies["@dsbunny/metadata-schema"]		= "github:dsbunny/metadata-schema"				|
	.peerDependencies["@dsbunny/net-schema"]		= "github:dsbunny/net-schema"					|
	.peerDependencies["@dsbunny/patch-schema"]		= "github:dsbunny/patch-schema"					|
	.peerDependencies["@dsbunny/robust-task-schema"]	= "github:dsbunny/robust-task-schema"				|
	.peerDependencies["@dsbunny/webhook-schema"]		= "github:dsbunny/webhook-schema"				|
	.peerDependencies["@dsbunny/zod-registry"]		= "github:dsbunny/zod-registry"					|
	.devDependencies["@dsbunny/error-schema"]		= ("github:dsbunny/error-schema#" + $error_commit)		|
	.devDependencies["@dsbunny/metadata-schema"]		= ("github:dsbunny/metadata-schema#" + $metadata_commit)	|
	.devDependencies["@dsbunny/net-schema"]			= ("github:dsbunny/net-schema#" + $net_commit)			|
	.devDependencies["@dsbunny/patch-schema"]		= ("github:dsbunny/patch-schema#" + $patch_commit)		|
	.devDependencies["@dsbunny/robust-task-schema"]		= ("github:dsbunny/robust-task-schema#" + $robust_task_commit)	|
	.devDependencies["@dsbunny/webhook-schema"]		= ("github:dsbunny/webhook-schema#" + $webhook_commit)		|
	.devDependencies["@dsbunny/zod-registry"]		= ("github:dsbunny/zod-registry#" + $registry_commit)
	' package.json | sponge package.json

jq '.devDependencies | with_entries(select(.key | test("^@dsbunny/.*-schema$")))' package.json
