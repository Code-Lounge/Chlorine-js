const Command = include("src/structures/Command");

module.exports = class Avatar extends Command {
  constructor(...args) {
    super(...args, {
      name: "teste",
      aliases: ["tt"],
      options: { localeKey: "commands", adminOnly: true },
    })
  }
  async handle({ msg, rawArgs, client }, responder) {
    
  }
}