# Explorer-1 GNUMakefile
ifneq (,)
This makefile requires GNU Make.
endif

storybook:
	npm run storybook

storybook-update:
	npx storybook@latest upgrade

storybook-migrate:
	npx storybook automigrate

storybook-doctor:
	npx storybook automigrate
