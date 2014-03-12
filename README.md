# Minimal setup to test a [BEM](http://bem.info) project with scopes

This repository contains the *minimal* configuration-files and folders you will need to load two different [BEM](http://bem.info) projects on the one page.

---

## Installation Requirements

- [node.js](http://nodejs.org/)

You may also consider [installing bem-tools locally to your environment](http://bem.info/tools/bem/installation/) for [ease of use](#an-easier-more-beautiful-way), though it is **not required**

---

## Installation

1. >```git clone https://github.com/ololobus/project-stub -b scoped```
2. >```cd project-stub```
3. >```npm install```
4. >```./node_modules/.bin/bower install```
5. >
```
cd libs/bem-bl && npm install
cd libs/bem-components && npm install
```
6. >```export BEM_CONFLICTS_NO=scopedapp```
7. >```./node_modules/.bin/bem server```
8. Go to [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html)
