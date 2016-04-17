About Yaya Modules
===

# Nutshell

Yaya modules bind together the following components:

- actions
- constants
- container
- flow
- reducer
- view

# Components


# File system

We keep a 1:1 relation, so inside a Yaya module directory, you will find the components files.

```
/MyYayaModule
  actions.js
  constants.js
  container.js
  flow.js
  reducer.js
  view.js
```

# Cli

You can generate Yaya modules directories via command line:

```bash
mkdir MyYayaModule && cd MyYayaModule;
yaya:module-init;
```
