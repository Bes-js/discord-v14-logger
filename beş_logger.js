const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits, SelectMenuBuilder, ActivityType,PermissionsBitField } = require("discord.js");
const client = global.client = new Client({ fetchAllMembers: true, intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.MessageContent], scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands], partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent], ws: { version: "10" } });
let logs = require("discord-logs");
logs(client);
const config = require("./config")
client.on("ready", async () => {
  console.log(`${client.user.tag} | Beş Discord Logs`);
  client.user.setPresence({ activities: [{ name: config.presence ? config.presence : `Beş Was Here`, type: ActivityType.Streaming, url: "https://www.twitch.tv/bes_exe" }], status: "dnd" });
})
// { BEŞ } - GUILDCHANNELS
client.on("channelCreate",(channel) => {
  let tür = {2: "Ses Kanalı",0: "Metin Kanalı",5: "Duyuru Kanalı",4: "Kategori",13:"Sahne",15:"Forum"}
  let embed = new EmbedBuilder()
  .setDescription(`> **Yeni Bir Kanal Oluşturuldu!**\n\n> **Kanal; ${channel}**\n> **Kanal ID; ${channel.id}**\n> **Kanal Türü; ${tür[channel.type]}**`)
  .setColor("#ff0000")
log({ embeds: [embed] })
})
client.on("channelDelete",(channel) => {
  let tür = {2: "Ses Kanalı",0: "Metin Kanalı",5: "Duyuru Kanalı",4: "Kategori",13:"Sahne",15:"Forum"}
  let embed = new EmbedBuilder()
  .setDescription(`> **Bir Kanal Silindi!**\n\n> **Kanal; ${channel.name}**\n> **Kanal ID; ${channel.id}**\n> **Kanal Türü; ${tür[channel.type]}**`)
  .setColor("#ff0000")
log({ embeds: [embed] })
})
client.on("channelUpdate",(oldChannel,newChannel) => {
  let tür = {2: "Ses Kanalı",0: "Metin Kanalı",5: "Duyuru Kanalı",4: "Kategori",13:"Sahne",15:"Forum"}
  if(oldChannel.name != newChannel.name){
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldChannel} Kanalının Adı Güncellendi!**\n\n> **Eski Adı; ${oldChannel.name}**\n> **Yeni Adı; ${newChannel.name}**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else if(oldChannel.type != newChannel.type){
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldChannel} Kanalının Tür'ü Değiştirildi!**\n\n> **Eski Tür; ${tür[oldChannel.type]}**\n> **Yeni Tür; ${tür[newChannel.type]}**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else{
  let embed = new EmbedBuilder()
  .setDescription(`> **${oldChannel} Kanalı Üzerinde Güncelleme Yapıldı, Fakat Ne Yapıldığı Algılanamadı!**`)
  .setColor("#ff0000")
log({ embeds: [embed] })
  }
})
client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${channel} - (\`${channel.id}\`) Kanalının İzinleri Güncellendi!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${channel} - (\`${channel.id}\`) Kanalının Konusu Güncellendi!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("unhandledGuildChannelUpdate", (oldChannel, newChannel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${oldChannel} Kanalı Üzerinde Güncelleme Yapıldı, Fakat Ne Yapıldığı Algılanamadı!**`)
    .setColor("#ff0000")
    log({ embeds: [embed] })
});
// { BEŞ } - EMOJIS
client.on("emojiCreate",(emoji) =>{
  let embed = new EmbedBuilder()
  .setDescription(`> **Yeni Bir Emoji Oluşturuldu!**\n\n> **Emoji; ${emoji}**\n> **Emoji ID; ${emoji.id}**\n> **Emoji URL; [Tıkla](${emoji.url})**`)
  .setColor("#ff0000")
  .setThumbnail(`${emoji.url}`)
  log({ embeds: [embed] })
})
client.on("emojiDelete",(emoji) =>{
  let embed = new EmbedBuilder()
  .setDescription(`> **Bir Emoji Silindi!**\n\n> **Emoji; ${emoji.name}**\n> **Emoji ID; ${emoji.id}**\n> **Emoji URL; [Tıkla](${emoji.url})**`)
  .setColor("#ff0000")
  .setThumbnail(`${emoji.url}`)
  log({ embeds: [embed] })
})
client.on("emojiUpdate",(oldEmoji,newEmoji) =>{
  if (oldEmoji.name !== newEmoji.name) {
  let embed = new EmbedBuilder()
  .setDescription(`> **${oldEmoji} Emojisinin Adı Güncellendi!**\n\n> **Eski Adı; ${oldEmoji.name}**\n> **Yeni Adı; ${newEmoji.name}**\n> **Emoji URL; [Tıkla](${newEmoji.url})**`)
  .setColor("#ff0000")
  .setThumbnail(`${newEmoji.url}`)
  log({ embeds: [embed] })
  }
})
// { BEŞ } - GUILD & GUILDMEMBERS
client.on("guildMemberRoleAdd", (member, role) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} (\`${member.id}\`) Kullanıcısına ${role} (\`${role.id}\`) Rolü Verildi!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("guildMemberRoleRemove", (member, role) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} (\`${member.id}\`) Kullanıcısından ${role} (\`${role.id}\`) Rolü Alındı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member.user.tag} Kullanıcısının Sunucudaki Adı Güncellendi!**\n\n> **Eski Adı; \`${oldNickname == null ? member.user.username : oldNickname}\`**\n> **Yeni Adı; \`${newNickname == null ? member.user.username : newNickname}\`**`)
    .setColor("#37393f")
    .setThumbnail(`${member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildBannerAdd", (guild, bannerURL) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucuya Banner Eklendi!**\n\n> **Banner URL;** [Tıkla](${bannerURL})`)
    .setImage(`${bannerURL}`)
    .setColor("#37393f")
    .setThumbnail(`${guild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildMemberEntered", (member) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Sunucu Kapısından Geçiş Yaptı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("guildMemberBoost", (member) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Sunucumuza Takviye Bastı!**`)
    .setColor("#00ff00")
  log({ embeds: [embed] })
});
client.on("guildMemberUnboost", (member) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} - Kullanıcısı Sunucumuzdaki Takviyesini Çekti!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucunun Takviye Durumu ${newLevel}.LVL Oldu!**`)
    .setColor("#00ff00")
  log({ embeds: [embed] })
});
client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucunun Takviye Durumu ${newLevel}.LVL Oldu!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("guildAfkChannelAdd", (guild, afkChannel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucuya AFK Kanalı Eklendi!**\n\n> **Kanal; ${afkChannel}**`)
    .setColor("#37393f")
    .setThumbnail(`${guild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildVanityURLAdd", (guild, vanityURL) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucuya Özel URL Alındı!**\n\n> **URL; ${vanityURL}**`)
    .setColor("#00ff00")
    .setThumbnail(`${guild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildVanityURLRemove", (guild, vanityURL) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucudaki Özel URL Kaldırıldı!**\n\n> **URL; ${vanityURL}**`)
    .setColor("#ff0000")
    .setThumbnail(`${guild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Özel URL'si Değiştirildi!**\n\n> **Eski URL; ${oldVanityURL}**\n> **Yeni URL; ${newVanityURL}**`)
    .setColor("#ff0000")
    .setThumbnail(`${guild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildFeaturesUpdate", (oldGuild, newGuild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Üzerinde Güncelleme Yapıldı!**\n\n> **Eski Ayarlar; ${oldGuild.features.join(", ")}**\n> **Yeni Ayarlar; ${newGuild.features.join(", ")}**`)
    .setColor("#ff0000")
    .setThumbnail(`${newGuild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Sahipliği Aktarıldı!**\n\n> **Eski Owner; ${oldGuild.owner}**\n> **Yeni Owner; ${newGuild.owner}**`)
    .setColor("#ff0000")
    .setThumbnail(`${newGuild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildPartnerAdd", (guild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Discord Partner'i Oldu!**`)
    .setColor("#00ff00")
  log({ embeds: [embed] })
});
client.on("guildPartnerRemove", (guild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucunun Discord Partnerliği Fes Edildi!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("guildVerificationAdd", (guild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Doğrulandı!**`)
    .setColor("#00ff00")
  log({ embeds: [embed] })
});
client.on("guildVerificationRemove", (guild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Artık Doğrulanmış Değil!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("unhandledGuildUpdate", (oldGuild, newGuild) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Sunucu Üzerinde Güncelleme Yapıldı, Fakat Ne Yapıldığı Algılanamadı!**`)
    .setColor("#ff0000")
    .setThumbnail(`${newGuild.iconURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
// { BEŞ } - MESSAGES
client.on("messagePinned", (message) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Yeni Bir Mesaj Sabitlendi!**\n\n> **Mesaj Sahibi; ${message.author}**\n> **Mesaj İçeriği; ${message.content}**\n> **Mesaj URL; [Tıkla](${message.url})**`)
    .setColor("#37393f")
    .setThumbnail(`${message.member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("messageContentEdited", (message, oldContent, newContent) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **Bir Mesaj İçeriği Düzenlendi!**\n\n> **Mesaj Sahibi; ${message.member}**\n> **Eski Mesaj İçeriği; ${oldContent}**\n> **Yeni Mesaj İçeriği; ${newContent}**`)
    .setColor("#37393f")
    .setThumbnail(`${message.member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("messageDelete", async(messageDelete) => {
  if(messageDelete.author == null || messageDelete.content == null)return;
  let embed = new EmbedBuilder()
    .setDescription(`> **Bir Mesaj Silindi!**\n\n> **Mesaj Sahibi; ${messageDelete.author}**\n> **Mesaj İçeriği; ${messageDelete.content}**\n> **Kanal; ${messageDelete.channel}**`)
    .setColor("#37393f")
    .setThumbnail(`${messageDelete.member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
// { BEŞ } - STATUS & PRESENCE
client.on("guildMemberOffline", (member, oldStatus) => {
  if (config.statSystem !== true) return;
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Çevrimdışı Oldu!**\n\n> **Önceki Durumu; ${oldStatus}**`)
    .setColor("#37393f")
    .setThumbnail(`${member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("guildMemberOnline", (member, newStatus) => {
  if (config.statSystem !== true) return;
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Çevrimiçi Oldu!**\n\n> **Şuanki Durumu; ${newStatus}**`)
    .setColor("#37393f")
    .setThumbnail(`${member.user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("unhandledPresenceUpdate", (oldPresence, newPresence) => {
  if (config.statSystem !== true) return;
  let embed = new EmbedBuilder()
    .setDescription(`> **Bir Üyenin Durumu Güncellendi, Fakat Ne Olduğu Algılanamadı!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
// { BEŞ } - ROLE
client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${role} - (\`${role.id}\`) Rolünün İzinleri Güncellendi!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.on("roleUpdate", (oldRole, newRole) => {
  if(oldRole.name !== newRole.name){
  let embed = new EmbedBuilder()
    .setDescription(`> **${oldRole} Rolünün Adı Güncellendi!**\n\n> **Eski Adı; ${oldRole.name}**\n> **Yeni Adı; ${newRole.name}**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else if(oldRole.position !== newRole.position){
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldRole} Rolünün Pozisyonu Güncellendi!**\n\n> **Eski Pozisyon; ${oldRole.position}**\n> **Yeni Pozisyon; ${newRole.position}**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else if(oldRole.hexColor !== newRole.hexColor){
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldRole} Rolünün Rengi Güncellendi!**\n\n> **Eski Rengi; ${oldRole.hexColor}**\n> **Yeni Rengi; ${newRole.hexColor}**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else if(oldRole.icon !== newRole.icon){
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldRole} Rolünün İkonu Güncellendi!**\n\n> **Eski İcon; [Tıkla!](${oldRole.iconURL})**\n> **Yeni Pozisyon; [Tıkla!](${newRole.iconURL})**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }else{
    let embed = new EmbedBuilder()
    .setDescription(`> **${oldRole} Rolü Üzerinde Güncelleme Yapıldı, Fakat Ne Yapıldığı Algılanamadı!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
  }
});
client.on("roleCreate",role => {
  let embed = new EmbedBuilder()
  .setDescription(`> **Yeni Bir Rol Oluşturuldu!**\n\n> **Rol; ${role}**\n> **Rol ID; ${role.id}**`)
  .setColor("#ff0000")
log({ embeds: [embed] })
})
client.on("roleDelete",role => {
  let embed = new EmbedBuilder()
  .setDescription(`> **Bir Rol Silindi!**\n\n> **Rol; ${role.name}**\n> **Rol ID; ${role.id}**\n> **Rol Rengi; ${role.color}**`)
  .setColor("#ff0000")
log({ embeds: [embed] })
})
// { BEŞ } - USERS
client.on("userAvatarUpdate", (user, oldAvatarURL, newAvatarURL) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${user} - ${user.tag} Kullanıcısı Profil Fotoğrafını Değiştirdi!**\n\n> **Eski Fotoğrafı; [Tıkla](${oldAvatarURL})**\n> **Yeni Fotoğrafı; [Tıkla](${newAvatarURL})**`)
    .setColor("#37393f")
    .setThumbnail(`${user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("userUsernameUpdate", (user, oldUsername, newUsername) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${user} - ${user.tag} Kullanıcısı Kullanıcı Adını Değiştirdi!**\n\n> **Eski Adı; ${oldUsername}**\n> **Yeni Adı; ${newUsername}**`)
    .setColor("#37393f")
    .setThumbnail(`${user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("userDiscriminatorUpdate", (user, oldDiscriminator, newDiscriminator) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${user} - ${user.tag} Kullanıcısı Kullanıcı Etiketini Değiştirdi!**\n\n> **Eski Etiketi; ${oldDiscriminator}**\n> **Yeni Etiketi; ${newDiscriminator}**`)
    .setColor("#37393f")
    .setThumbnail(`${user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("userFlagsUpdate", (user, oldFlags, newFlags) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${user} - ${user.tag} Kullanıcısının Rozeti Güncellendi!**`)
    .setColor("#37393f")
    .setThumbnail(`${user.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
client.on("unhandledUserUpdate", (oldUser, newUser) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${oldUser} - ${oldUser.tag} Kullanıcısının Hesabı Üzerinde Güncelleme Yapıldı, Fakat Ne Yapıldığı Algılanamadı!**`)
    .setColor("#ff0000")
    .setThumbnail(`${newUser.avatarURL({dynamic:true})}`)
  log({ embeds: [embed] })
});
// { BEŞ } - VOICE CHANNEL
client.on("voiceChannelJoin", (member, channel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı ${channel} Kanalına Katıldı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelLeave", (member, channel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı ${channel} Kanalından Ayrıldı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı ${oldChannel} Kanalından ${newChannel} Kanalına Geçiş Yaptı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelMute", (member, muteType) => {
  let tür = {"self-muted": "Lokal","server-muted": "Sunucuda Mute"}
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı ${tür[muteType]} Olarak Sesli Kanalda Sustu!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelUnmute", (member, oldMuteType) => {
  let tür = {"self-muted": "Lokal","server-muted": "Sunucuda Mute"}
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısının ${tür[oldMuteType]} Olarak Sesli Kanal Susturması Kalktı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelDeaf", (member, deafType) => {
  let tür = {"self-deafed": "Lokal","server-v": "Sunucuda Sağırlaştırma"}
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı ${tür[deafType]} Olarak Sesli Kanalda Sağırlaştı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceChannelUndeaf", (member, deafType) => {
  let tür = {"self-deafed": "Lokal","server-v": "Sunucuda Sağırlaştırma"}
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısının ${tür[deafType]} Olarak Sesli Kanal Sağırlaştırması Kalktı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceStreamingStart", (member, voiceChannel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Tarafından ${voiceChannel} Kanalında Yayın Başlatıldı!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("voiceStreamingStop", (member, voiceChannel) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${member} - ${member.user.tag} Kullanıcısı Tarafından ${voiceChannel} Kanalında Başlatılan Yayın Son Buldu!**`)
    .setColor("#37393f")
  log({ embeds: [embed] })
});
client.on("unhandledVoiceStateUpdate", (oldState, newState) => {
  let embed = new EmbedBuilder()
    .setDescription(`> **${oldState.member} - ${oldState.member.user.tag} Kullanıcısı Tarafından Bir Ses Etkinliği Gerçekleşti, Fakat Ne Yapıldığı Algılanamadı!**`)
    .setColor("#ff0000")
  log({ embeds: [embed] })
});
client.login(config.token);
Collection.prototype.array = function () { return [...this.values()] }
async function log(beş) {
  let kanal = client.channels.cache.get(config.logChannelID)
  if(!kanal)return console.log("Log Kanalı Bulunamadı | Kanal ID'sini Kontrol Ediniz!")
  kanal.send(beş)
}



















