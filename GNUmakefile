.DEFAULT_GOAL :=

NODE_MODULES := ./node_modules/

BEM := $(NODE_MODULES).bin/bem
BOWER := $(NODE_MODULES).bin/bower
NPM := npm

export BEM_CONFLICTS_NO = scopedapp

ifneq (,$(findstring B,$(MAKEFLAGS)))
	BEM_FLAGS := --force
endif

all:: $(BEM) server

%:: $(BEM)
	$(if $(findstring GNUmakefile,$@),,$(BEM) make $@ $(BEM_FLAGS))

.PHONY: server

server:: $(BEM) libs
	@$(BEM) server

$(BEM):: $(NODE_MODULES)

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) install

install:
	@$(NPM) install
	@$(BOWER) install

.PHONY: clean
clean::
	$(BEM) make -m clean
