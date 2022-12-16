# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Rikishi seeds 
# template
# _____ = Rikishi.create(
#     shikona: ,
#     image_url: ,
#     highest_rank: ,
#     current_rank: ,
#     heya: ,
#     height: ,
#     weight: ,
#     birthdate: ,
#     yusho: ,
#     shukun_sho: ,
#     kanto_sho: ,
#     gino_sho: ,
#     kinboshi: 
# )

Terunofuji = Rikishi.create(
    shikona: "Terunofuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20110008.jpg",
    highest_rank: "Y",
    current_rank: "Y",
    heya: "Isegahama",
    height: 192,
    weight: 181,
    birthdate: 19911129,
    yusho: 7,
    shukun_sho: 3,
    kanto_sho: 3,
    gino_sho: 3,
    kinboshi: 0
)

Takakeisho = Rikishi.create(
    shikona: "Takakeisho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20140083.jpg",
    highest_rank: "O",
    current_rank: "O",
    heya: "Tokiwayama",
    height: 175,
    weight: 163,
    birthdate: 19960805,
    yusho: 1,
    shukun_sho: 3,
    kanto_sho: 2,
    gino_sho: 2,
    kinboshi: 3
)

Takayasu = Rikishi.create(
    shikona: "Takayasu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20050022.jpg",
    highest_rank: "O",
    current_rank: "1",
    heya: "Tagonoura",
    height: 187,
    weight: 184,
    birthdate: 19900228,
    yusho: 0,
    shukun_sho: 4,
    kanto_sho: 6,
    gino_sho: 2,
    kinboshi: 5
)

Ichinojo = Rikishi.create(
    shikona: "Ichinojo",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130077.jpg",
    highest_rank: "S",
    current_rank: "2",
    heya: "Minato",
    height: 192,
    weight: 211,
    birthdate: 19930407,
    yusho: 1,
    shukun_sho: 3,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 8
)

Hokutofuji = Rikishi.create(
    shikona: "Hokutofuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20150042.jpg",
    highest_rank: "K",
    current_rank: "5",
    heya: "Hakkaku",
    height: 184,
    weight: 166,
    birthdate: 19920715,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 2,
    kinboshi: 7
)

Ryuden = Rikishi.create(
    shikona: "Ryuden",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20060023.jpg",
    highest_rank: "K",
    current_rank: "6",
    heya: "Takadagawa",
    height: 190,
    weight: 148,
    birthdate: 19901110,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 1,
    gino_sho: 1,
    kinboshi: 0
)

Abi = Rikishi.create(
    shikona: "Abi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20130059.jpg",
    highest_rank: "S",
    current_rank: "9",
    heya: "Shikoroyama",
    height: 187,
    weight: 151,
    birthdate: 19940504,
    yusho: 1,
    shukun_sho: 1,
    kanto_sho: 4,
    gino_sho: 0,
    kinboshi: 3
)

Takanosho = Rikishi.create(
    shikona: "Takanosho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20100039.jpg",
    highest_rank: "S",
    current_rank: "9",
    heya: "Tokiwayama",
    height: 185,
    weight: 170,
    birthdate: 19941114,
    yusho: 0,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 1
)

Oho = Rikishi.create(
    shikona: "Oho",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20180002.jpg",
    highest_rank: "13",
    current_rank: "13",
    heya: "Otake",
    height: 189,
    weight: 179,
    birthdate: 20000214,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0
)

Atamifuji = Rikishi.create(
    shikona: "Atamifuji",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20200074.jpg",
    highest_rank: "15",
    current_rank: "15",
    heya: "Isegahama",
    height: 185,
    weight: 177,
    birthdate: 20020903,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0
)

Tokushoryu = Rikishi.create(
    shikona: "Tokushoryu",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20090002.jpg",
    highest_rank: "2",
    current_rank: "J",
    heya: "Kise",
    height: 182,
    weight: 191,
    birthdate: 19860822,
    yusho: 1,
    shukun_sho: 1,
    kanto_sho: 1,
    gino_sho: 0,
    kinboshi: 1
)

Tochimusashi = Rikishi.create(
    shikona: "Tochimusashi",
    image_url: "http://sumo.or.jp/img/sumo_data/rikishi/60x60/20210009.jpg",
    highest_rank: "J",
    current_rank: "J",
    heya: "Kasugano",
    height: 183,
    weight: 157,
    birthdate: 19990111,
    yusho: 0,
    shukun_sho: 0,
    kanto_sho: 0,
    gino_sho: 0,
    kinboshi: 0
)