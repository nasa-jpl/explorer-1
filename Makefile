# Explorer-1 GNUMakefile
ifneq (,)
This makefile requires GNU Make.
endif

NODE_VERSION ?= $(shell node --version)
NPM_VERSION ?= $(shell npm --version)
NVM_EXISTS := $(shell if [ -d "${HOME}/.nvm" ]; then echo "nvm installed"; fi)

TERM_TEXT := tput -Txterm
GREEN  := $(shell $(TERM_TEXT) setaf 2)
YELLOW := $(shell $(TERM_TEXT) setaf 3)
RESET  := $(shell $(TERM_TEXT) sgr0)
TARGET_MAX_CHAR_NUM := 23
.DEFAULT_GOAL := help

nvm-use:
	. ${HOME}/.nvm/nvm.sh && nvm use

check-nvm:
ifndef NVM_EXISTS
	@echo '$(YELLOW)Node Version Manager not found 😿$(RESET)'
	@( read -p "$(YELLOW)Please install nvm: https://github.com/nvm-sh/nvm$(RESET)")
else
	if [ -d "$(HOME)/.nvm/.git" ]; then echo "🚚 installing dependencies from $(YELLOW)package.json$(RESET)..."; fi
	@echo '   --------------------'
	@echo '📦 $(GREEN)Node Version Manager$(RESET)'
	@echo '   $(YELLOW)node: $(NODE_VERSION)$(RESET)'
	@echo '   $(YELLOW)npm: v$(NPM_VERSION)$(RESET)'
	@echo '👀 looking for $(YELLOW).nvmrc$(RESET) file with expected node version...'
	@make nvm-use
	@echo '⏳ it can take a few minutes to install all of the $(YELLOW)node_modules$(RESET)'
	@echo '🙆 this could be a good opportunity to have a stretch... '
	@echo '⏭️  postinstall will check $(GREEN)workspaces$(RESET) with $(YELLOW)manypkg$(RESET)...'
endif

nvm:
	make check-nvm && $(CMD)

## install dependencies
install: check-nvm
	pnpm install

i: install

## HTML: run Storybook
html-storybook:
	pnpm --filter @explorer-1/html-storybook dev

## HTML: run Vite
html-dev:
	pnpm --filter @explorer-1/html dev

html: html-dev

## HTML: build assets
html-build:
	pnpm --filter @explorer-1/html build

## Vue: run Storybook
vue-storybook:
	pnpm --filter @explorer-1/vue-storybook dev

## Vue: run Vite
vue-dev:
	pnpm --filter @explorer-1/vue dev

vue: vue-dev

## Vue: build assets
vue-build:
	pnpm --filter @explorer-1/vue build

## Nuxt: run module playground
nuxt-dev:
	pnpm --filter @explorer-1/nuxt dev

## Nuxt: build module
nuxt-build:
	pnpm --filter @explorer-1/nuxt build

# TODO: Below helper commands not running as expected change dir first, then pnpm dlx...
# ## HTML: update Storybook
# html-storybook-update:
# 	pnpm --dir apps/html-storybook dlx storybook@latest upgrade --config-dir apps/html-storybook/.storybook

# ## HTML: run Storybook automigrations
# html-storybook-migrate:
# 	pnpm --dir apps/html-storybook dlx storybook automigrate --config-dir apps/html-storybook/.storybook

# ## HTML: check Storybook health
# html-storybook-doctor:
# 	pnpm --dir apps/html-storybook dlx storybook doctor --config-dir apps/html-storybook/.storybook

# ## Vue: update Storybook
# vue-storybook-update:
# 	pnpm --dir apps/vue-storybook dlx storybook@latest upgrade --config-dir apps/vue-storybook/.storybook

# ## Vue: run Storybook automigrations
# vue-storybook-migrate:
# 	pnpm --dir apps/vue-storybook dlx storybook automigrate --config-dir apps/vue-storybook/.storybook

# ## Vue: check Storybook health
# vue-storybook-doctor:
# 	pnpm --dir apps/vue-storybook dlx storybook doctor --config-dir apps/vue-storybook/.storybook

## General: Show Makefile help / View all commands @default make target
help:
	@echo ''
	@echo 'Makefile Usage:'
	@echo '  ${GREEN}make${RESET} ${GREEN}[command]${RESET}'
	@echo 'Available Commands:'
	@awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "  ${YELLOW}%-$(TARGET_MAX_CHAR_NUM)s${RESET} ${GREEN}%s${RESET}\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
