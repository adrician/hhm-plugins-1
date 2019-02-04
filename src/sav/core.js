/**
 * Meta plugin for loading a set of basic plugins.
 *
 * Changelog:
 *
 * 1.1.0:
 *  - add sav/players to core
 */

const room = HBInit();

room.pluginSpec = {
  name: `sav/core`,
  author: `saviola`,
  version: `1.1.0`,
  dependencies: [
    `sav/commands`,
    `sav/cron`,
    `sav/help`,
    `sav/players`,
    `sav/players-helper`,
    `sav/roles`,
  ],
};