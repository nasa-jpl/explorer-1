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

## NVM: Runs nvm-use to set the project's node version
nvm-use:
	. ${HOME}/.nvm/nvm.sh && nvm use

## NVM: Will error with link to install nvm if it's not installed
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

## NVM: Mixin to use nvm in make commands. Example usage: `make nvm CMD="npm i"`
nvm:
	make check-nvm && $(CMD)

## install dependencies
install: check-nvm
	pnpm install

i: install

## HTML: run Storybook
storybook-html:
	pnpm run --filter storybook-html dev

## HTML: run Vite
html-dev:
	pnpm run --filter html dev

## HTML: build assets
html-build:
	pnpm run --filter html build

## Vue: run Storybook
storybook-vue:
	pnpm run --filter storybook-vue dev

## Vue: run Vite
vue-dev:
	pnpm run --filter vue dev

## Vue: build assets
vue-build:
	pnpm run --filter vue build

# TODO: convert these to filtered pnpm equivalents
## storybook-html: update to the latest version of Storybook
# storybook-html-update:
# 	npx storybook@latest upgrade

# ## storybook-html: run Storybook automigrations
# storybook-html-migrate:
# 	npx storybook automigrate

# ## storybook-html: check health
# storybook-html-doctor:
# 	npx storybook automigrate

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
