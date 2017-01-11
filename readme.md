# redub-cli

### a command line interface for redub (a react redux boilerplate)

> `redub-cli` gives a little more power to a react redux boilerplate

## Installation

```sh
$ npm i -g redub-cli 
```

## Your First Redub Project

*Create a new app:*
```sh
# Create the project
$ redub new testProject
```
*Generate a new component:*
```sh
# cd into the new folder
$ cd testProject

# Create a new component
$ redub generate comp myFirstComponent
```

## Usage

`redub-cli` has the ability to create a new plank redux boilerplate and
generate templates of *containers*, *components*, *views*, *reducers*, and *actions*.

Once `redub-cli` is installed globaly a plank new redux boilerplate (redub) project can be generated

Documentation for redub -> [click here](https://github.com/rudolfsonjunior/redub/blob/master/readme.md).

## Commands

- [new](#new)
- [generate](#generate)

## new

This command has the ability to create a new redub project within the current folder 
or to create a new folder with the specified name in the current folder.

```sh
$ redub new
```
or
```sh
$ redub new [name]
```

shortcut
```sh
$ redub n [name]
```

**[name]**:
* the name you want for this project

## generate

This command has the ability to generate a new templates 
of a *container*, a *component*, a *view*, a *reducers*, or an *action*.

```sh
$ redub generate [type] [name]
```

shortcut
```sh
$ redub g [type] [name]
```

**[type]**:
* act -> an action
* red -> an reducer
* cont -> an container
* comp -> an component
* view -> an view

**[name]**:
* the name you want for this document


