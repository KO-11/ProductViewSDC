const db = require('../db/index.js');
const mongoose = require('mongoose');
var product = [
  {
    "id": 1,
    "item": "Marvel's Spider-Man: Miles Morales Launch Edition - Playstation 5",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_77b37d1f-68a4-4a39-866e-d7382f1f3b3f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_9b9a9d18-6659-4e0f-8750-89d52491b2d2?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_66b72e9b-9218-4d53-b95a-5c66cd175c5c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_b868de0b-71ff-463b-9c94-2564b33b9f64?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 2,
    "item": "Marvel's Spider-Man: Miles Morales Ultimate Launch Edition - Playstation 5",
    "price": 69.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_77b37d1f-68a4-4a39-866e-d7382f1f3b3f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_9b9a9d18-6659-4e0f-8750-89d52491b2d2?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_66b72e9b-9218-4d53-b95a-5c66cd175c5c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_b868de0b-71ff-463b-9c94-2564b33b9f64?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 3,
    "item": "Devil May Cry 5: Special Edition - Playstation 5",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_6c24a43f-7946-491f-a54f-b488325c4be0?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6b5256c9-615d-4a1f-9b54-249aa46ac792?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_a946bfd8-9bae-4bba-ba16-0a55b8d99001?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_81646180-4033-4420-9637-5713edac426c?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 4,
    "item": "Godfall - PlayStation 5",
    "price": 69.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_87b882c6-ed37-42e0-8bc6-c18886b97d67?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_66b85c43-c089-4ba3-8736-58f120f169e8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f8aa5725-8b8c-4ba2-b708-1dee02b9d25c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_468471b6-3e70-4186-a829-f279f64ab772?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 5,
    "item": "Immortals Fenyx Rising - Playstation 5",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_3f0da078-c08e-456d-93db-47098f4eae6f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_8a8134fd-768e-4d2d-a021-756aa72378fa?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_a276a356-7a06-4f11-9b41-d6bc65ffff91?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_fbea5df9-8be5-46ef-93e1-0ab0bb551856?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 6,
    "item": "Watch Dogs: Legion - PlayStation 5",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_9abe8652-039f-43eb-a8de-96ab56777b93?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_80f2f18c-9d0d-4006-acc9-62080289fd3c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4fd5dad1-1b32-4e3e-a506-313d0e8906ec?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_cb0edd15-0587-4b0e-bf65-027dd966a01a?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 7,
    "item": "Guilty Gear: Strive - Playstation 5",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_ea1485af-31e3-425e-b8bd-0570ab1b694c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_1343aaa5-c120-495b-973e-6736952a38a8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_1e0ac8e3-4897-45b9-ba3f-f4121608b03b?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_72a2c7e6-f7e8-4b96-ae13-007daf172247?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 8,
    "item": "Puyo Puyo Tetris 2 - Playstation 5",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_36ae75f1-bfde-448c-999d-71f6add3915c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_0866f603-c40c-4ec5-a476-9b4d05bcc4b8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_79dc9459-1c4f-46c4-a82c-21a03dc4665e?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_79fded5a-8582-4471-8c87-7bcfb4ab9546?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 9,
    "item": "Overcooked! All You Can Eat - Playstation 5",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_604a5bbd-a115-4a9f-a58e-5c45b2775f3f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e4b46e76-14bb-480e-a59e-d3eec3a243f0?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_d609b00d-39da-440e-bb8e-2f772563a371?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_29cf284c-bca0-4f12-a020-c8337a6424f5?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS5"
  },
  {
    "id": 10,
    "item": "Call of Duty: Black Ops Cold War - Playstation 4",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_7a8b3f7a-8c25-44f0-9889-52773321be78?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_d859a42b-5bb4-4e13-95af-99269ec8349a?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_ab932ed3-3f8f-4578-8a90-936c7dfe81e1?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6dc0dd10-531d-44f9-8c86-434d4274f97e?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS4"
  },
  {
    "id": 11,
    "item": "Cyberpunk 2077 - PlayStation 4",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0f5f5290-af41-410b-ad71-ec84d227ab44?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_632dfe49-c91a-4a2d-8f35-e5fe147b7320?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_d1badcea-edac-4642-b674-3d0d83ae8622?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_427ddcc8-92ca-4198-9a37-f63e13406e3d?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS4"
  },
  {
    "id": 12,
    "item": "Hitman 3 - VR Mode Included - Playstation 4",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_c38a440c-462a-4f21-8310-141612b6202d?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_74b7e86b-3d3e-4cc4-92b8-517827456b9f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_807631b3-91f1-4d3d-b7eb-0cdb7999e407?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f238b116-1e26-420a-91e7-ee2a08889021?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS4"
  },
  {
    "id": 13,
    "item": "Five Nights at Freddy's: Help Wanted - VR Mode Included - PlayStation 4",
    "price": 29.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_5f08d3e5-6394-40d4-bb20-3b891550604c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_bcaab823-c821-4e35-9ea3-6576813beda8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_137abfc1-a727-4fdb-93fc-7793f757b9fc?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_387e536a-e3e9-4faa-b9d4-ac2785dc25a7?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "PS4"
  },
  {
    "id": 14,
    "item": "Star Wars: Squadrons - Xbox One",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_559132b9-d0d1-47c0-ac52-539a4640facb?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_b4892481-befb-4b3a-9629-4f6990e5b801?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_0383fd9b-37b0-4229-b7b8-8dab439f2a06?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_08fc7074-4bb4-4228-b53a-90e4c90ebbd1?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 15,
    "item": "Assassin's Creed: Valhalla - Xbox One",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_c5fb8c7f-e40f-43ad-8833-5561f30a379f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e5355cfc-899a-4b5b-91ab-0e5e945544b7?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_1f7b8982-13dd-46ef-8e63-966bd14cb1c4?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4c109634-ffd5-478e-915d-5c7a80a4f524?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 16,
    "item": "Star Wars: Jedi Fallen Order - Xbox One",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_4f6a3a86-7d47-4bc7-a316-020d6cedf811?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_7a21b165-088e-4108-8244-82d5781e19d6?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_08cddf68-d6b4-40cb-b883-3e044d0cceea?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_3d00d01c-a979-4e8d-b2f8-d6f029f29179?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 17,
    "item": "Borderlands 3 - Xbox One",
    "price": 29.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0b60c535-be6b-4208-9129-e27d6ea811b6?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_999e7e5b-bd5b-46eb-b720-9ec228320b28?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_fc1fd91d-1a84-47a4-b82a-e1009ed39893?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_be16ecdd-9604-4372-be60-f00dac695482?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 18,
    "item": "The Outer Worlds - Xbox One",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_f8058f4a-66d3-4012-9a17-23199c624bd8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_8273584d-490a-4991-a8d9-45538c9157e7?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_c1284a6e-c375-4647-9c5f-836e4a8670be?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_0c843430-3c5f-4273-bf1e-30b66259ebb1?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 19,
    "item": "Kingdom Hearts III - Xbox One",
    "price": 19.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_a2361628-8f6a-4e15-aeca-85a5b353e160?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_7f070dee-6a1d-460f-8c09-e3e5bed5e2bc?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e1b1ad6b-5ea2-4e7d-8020-27a4f65c0d29?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_ec3195d5-85f8-403a-8fc4-51b78570c8fb?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 20,
    "item": "Fallout 76 - Xbox One",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_a7f43980-cbc5-47dc-9aec-6a77d07c8e63?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_71e4b538-5088-45c4-b9c8-673127aa5a15?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_7f4d279f-dfee-4170-9897-43a14e646210?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_9bc9576d-9e9b-4a7c-9d5f-f732ac11d9f5?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 21,
    "item": "Marvel's Avengers - Xbox One",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_47586588-7c76-4b68-93ed-17b3142b3cb1?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_399f1b01-bcf5-4236-85ad-665e96a0c0e5?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_0b7c4ac6-42ae-42f4-aae8-fc284bf4ed52?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f36d4095-066b-41d2-863a-cdeec3b3be73?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "xbox one"
  },
  {
    "id": 22,
    "item": "Super Mario Bros. U: Deluxe - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_5cbe0e37-54a3-4b51-bf0d-04f0d1d4b8c9?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_80922e78-47a4-443f-bf2b-68e7945f12b0?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_c5dd4eb7-8c39-4524-8492-1686154e1994?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_3d82e2b6-88d9-472d-b9c8-40d07083f17d?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 23,
    "item": "Super Smash Bros. Ultimate - Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_b26ea68d-b0c3-4f30-a67a-4182b17841f3?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_97299967-5e11-49c3-9910-4a5134cff5dc?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e398045d-b761-4eee-97c4-53a581c6502a?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_05dc28ea-cc74-4b90-9df2-1cd7e65963b4?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 24,
    "item": "Animal Crossing: New Horizons – Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_83f32699-98bf-49e0-903a-1eede0c034e8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f369a875-da11-4cbb-8ead-227c58ffdbdc?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_568a8813-5d08-4841-82cf-2e5e78e2ec96?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4f84018a-eea7-4847-a851-89d44cb42801?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 25,
    "item": "Mario + Rabbids: Kingdom Battle - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_6990fa5c-2b21-4e71-bf10-bc6bb49ba76e?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_ca65b15c-4e58-4a71-81de-29b3d042f8a2?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_3a036d17-4965-4ac3-be7c-aec23e0492ee?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_785ba068-4a2e-421b-a667-ef2d950f47c5?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 26,
    "item": "Super Mario Party - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0c8a0d59-dd86-43f3-a98a-b0d6439972ab?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_bcdcfdb3-e0ab-474d-bc22-81e48d85c87a?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6d31a506-2423-42ee-9718-e8904d980df2?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_8980c7be-3343-4b4c-90f6-ec38430ccd09?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 20,
    "item": "Super Mario Odyssey - Nintendo Switch",
    "price": 44.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0d151669-8465-4a77-b1d5-d0850f63c391?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_67169ff3-98c1-4e28-b260-6eaf6174ad91?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_117f0480-b821-4250-84f8-7040fa14e212?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_b840e3fe-024a-49de-925b-93ad2692ae3b?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 21,
    "item": "Luigi's Mansion 3 – Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_fd476c2c-b4ec-41f6-8c9d-a628fa7d24c3?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4f15d37d-0492-4e5e-8f47-2fe8904c802c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_43bb4513-385a-4ecb-919d-1db9087f0256?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f42ac5dc-0018-4b58-ab61-e2abe05f1714?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 22,
    "item": "Pokemon Sword - Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_550bae17-dc07-4a06-b726-64482954b101?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_1dde10cb-b0c5-4117-b36f-9064fbc2ece9?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_78e80f05-7d16-43ab-b387-13d13e0b09f8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_8cda0ca0-df4a-44ad-9871-fda6a8159903?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 23,
    "item": "Minecraft - Nintendo Switch",
    "price": 28.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_2d29e86c-06b4-487b-8704-08efbc090bdf?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6cc79a61-537e-4108-87cd-eb2494184f05?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e8dafd67-a2f4-435d-b38d-d8b0488bb0d4?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_561e16d6-08fb-41c7-8552-90c300c01428?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 24,
    "item": "The Legend of Zelda: Link's Awakening - Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_a98ecf27-8b81-42c1-bf55-81f6a42bc8f1?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_2de019bb-fa14-46db-af29-75e3e57cb369?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_a5734f90-0e78-4f10-9fff-739d471ac501?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_b3e27b0a-e630-4641-a888-062b4b2ce4bc?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 25,
    "item": "Super Mario Maker 2 - Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_03dcf89a-869d-4544-b5ae-1baa12bd84a5?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_287fd8a7-9e49-4a54-919e-abad7ee44479?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4b43cc62-7918-4617-aa62-098b155eef9d?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_830dde2d-ccb3-4783-b352-b5a55e1cf39d?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 26,
    "item": "Super Mario 3D All-Stars - Nintendo Switch",
    "price": 59.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_c2f19539-056c-406d-bd99-70d2a97f4853?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_d118aa61-1525-4154-b0fa-f362f73076bb?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_ada69d21-1192-4599-9ee4-390d14055ad8?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_2911d783-0430-4eff-92f6-76e0304a37f4?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 27,
    "item": "Yoshi's Crafted World - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_c6cfa1ff-82dd-4eaa-b688-f5fde94326c5?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_40476e49-d949-4989-9fde-648235e588c0?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f2999611-6e66-4b2f-a471-f32c5d9bed6c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_4f896b49-3284-4dec-ae92-fb6b907c3259?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 28,
    "item": "Splatoon 2 - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_9382109e-285f-4631-adaa-225fe82754e1?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_be8f9634-a7d4-4b5b-b98b-38b60f958e7b?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_8af8479a-9c69-411c-b0d5-054bbca80c9c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_2641f96d-6524-46b6-9b2d-a101d901337d?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 29,
    "item": "Donkey Kong Country: Tropical Freeze - Nintendo Switch",
    "price": 44.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_bd05b236-b56b-40db-8b3a-91076089bc9c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_83ae6cc2-74c6-40e9-a3c9-9e5601250e9b?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_3a5b333a-7ea7-48e3-b3a9-6ed4a228fa5c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_97dd80dc-5e81-487e-8ed4-080ab1313829?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 30,
    "item": "The Legend of Zelda: Breath of the Wild - Nintendo Switch",
    "price": 44.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_e97f4ca6-9e20-4e34-ae64-1ac42d0d394c?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6a245b3b-d016-4572-a5f5-c64b6033ecba?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_3ba1f2f4-79c1-42b7-af83-d3b18084e3fd?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_50feec1f-0de3-44f7-8b2e-47e2011efda9?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 31,
    "item": "Shovel Knight: Treasure Trove - Nintendo Switch",
    "price": 39.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0d7699e6-5ac0-4ca0-a4c0-1c6b09404529?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_9e44f076-8c7c-4214-8047-5f926bb43321?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_ec8267fb-6a4f-4bb2-a3ec-904c768fa15f?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_e4db3c1b-2e61-4fdf-af17-68efad069c92?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 32,
    "item": "Super Mario Party - Nintendo Switch",
    "price": 49.99,
    "imgUrl": [
      "https://target.scene7.com/is/image/Target/GUEST_0c8a0d59-dd86-43f3-a98a-b0d6439972ab?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_bcdcfdb3-e0ab-474d-bc22-81e48d85c87a?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_6d31a506-2423-42ee-9718-e8904d980df2?fmt=webp&wid=1400&qlt=80",
      "https://target.scene7.com/is/image/Target/GUEST_f397cab0-7b2b-4c32-850d-4fa28883ac24?fmt=webp&wid=1400&qlt=80"
    ],
    "system": "switch"
  },
  {
    "id": 33,
    "item": "Pokemon Shield - Nintendo Switch",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_899c1b8e-7f3a-4b79-af4d-06e0baf062b1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_d9db387f-2d3e-4658-88f4-0783b3e38b55?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_ecc6fd1e-d37d-424a-8a97-e5e7016d97d5?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_eea013c5-8d5e-4eb7-9ca3-58aa3dcf5e70?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8783a05e-e5e7-433b-a3ea-c4cc5264c7d9?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_af74346f-43d8-40a0-aac6-04bd8724d6af?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 34,
    "item": "Animal Cross: New Horizons - Nintendo Switch",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_83f32699-98bf-49e0-903a-1eede0c034e8?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5a8a2567-d904-4641-960b-4fe3bba477cd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f369a875-da11-4cbb-8ead-227c58ffdbdc?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_14d95a72-28d1-430b-a209-a0e1425137c2?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_2cdd21be-cd83-4e15-a7eb-3da2e95f1162?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_568a8813-5d08-4841-82cf-2e5e78e2ec96?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 35,
    "item": "Just Dance 2020 - Nintendo Switch",
    "price": 29.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_613521ee-a244-4b54-8f43-eaeb620ead4a?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_92aa2f17-9548-4441-bdb2-6de7266937d7?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5597dfe9-6ef6-443f-8cad-3fcea08fca72?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_02b23952-c7db-432d-a600-ad0b8b94e0cc?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_675109a7-59d8-48fb-9fe3-cb32445a5dec?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_010dd2dc-6089-40d0-b3b9-e7db49c5c6ce?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 36,
    "item": "Tony Hawk's: Pro Skater 1 + 2 - Xbox One",
    "price": 39.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_81bd4990-0fe1-4bc3-9cb0-e8bce7505ce8?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3cae2858-c91a-428b-9686-d7ff99097a8b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_cc3d67dd-f1bb-4ebc-80df-3dd039bd8a55?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_77a1b1ae-ff14-4aa9-9000-a8cd2d66e4fd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_aaee684e-3710-47dd-81e5-89f5d88b7a55?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_05a60938-ad33-4af8-a400-4576f1203d49?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 37,
    "item": "Mario & Sonic at the Olympic Games: Tokyo 2020 - Nintendo Switch",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_e2f359b4-9c95-4b8c-b089-c5a04e002434?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_6bcfc04b-7af2-400b-9f77-c4fa10c0c28d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7cbf637c-18bf-455a-9f9d-bb093a1c7651?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a672a0f9-f668-45f1-b8b5-481a5378a74d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a229d47e-fc04-4b01-8cdd-bd603f75ee26?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b14464a8-e2f8-422c-9c75-1654d4c6a45e?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 38,
    "item": "Luigi's Mansion 3 - Nintendo Switch",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_fd476c2c-b4ec-41f6-8c9d-a628fa7d24c3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_4f15d37d-0492-4e5e-8f47-2fe8904c802c?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_43bb4513-385a-4ecb-919d-1db9087f0256?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f42ac5dc-0018-4b58-ab61-e2abe05f1714?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5eb668ab-d19e-453b-ac3d-f68ce2f1c0f0?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8d216bc6-dd8d-42ce-ba45-12b44b07d32a?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 39,
    "item": "Dead Island 2 - Xbox One",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_9faa0044-564c-4a79-a1c6-526c2541820b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_c3470429-12d2-4714-96bf-770ebf856e9f?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_ee73fb2a-026d-4720-9565-1c1e810a96a8?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_be7b43d2-4673-4f68-a0fd-42944b1c9bb0?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_ddd35dee-c21a-4831-bfd7-a33d3f6696eb?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 40,
    "item": "Dyling Light Anniversary Edition - Xbox One",
    "price": 39.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_7096b7e8-9d78-4756-909f-b83bf0bb1657?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_483d1343-8769-444a-a519-f9383277ff26?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_55aee47e-d475-4e0f-831e-6285145d96c6?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_4679c781-40e7-4906-b39a-041d15503954?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e8344fff-5bfc-4322-ba89-fc9959bbd700?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_771890bd-08c4-4ec0-a132-b5e55341a6c0?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 41,
    "item": "Yakuza: Like a Dragon - Xbox One/Series X",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_773e5ed6-7734-4cde-9688-1846f83af599?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_abcebd72-03cf-4d7d-b282-ea8adcfbb56f?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_29f2617e-c31f-49de-88a1-17f1b4c94f1c?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_9e5f60b8-760c-4042-a371-1d67fd8004a1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_212dea6c-7872-4d1e-972a-75bfd8d99451?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_d92d359b-9e86-4dd6-9237-2a6adfe1fd4a?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 42,
    "item": "Crash Bandicoot 4: It's About Time - Xbox One/Series X",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_fd09a788-7731-4251-ba55-8fc4613faabc?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7e5a1d54-dd21-4a10-bb2d-f4c27191ab44?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7cfa2b99-d5cb-438b-9636-db2a05a65280?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e877b221-f99c-4c19-8757-be872a8457d7?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_621e045c-b6ea-4eb1-93ea-d0e74543c998?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_75d7155b-1a75-42b9-9613-3aa3a6237ef2?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 43,
    "item": "Marvel's Avengers",
    "price": 79.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_7f145ce7-676e-4bcd-a7f9-926fe7f69d77?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 44,
    "item": "Star Wars: Squadrons - Xbox One",
    "price": 39.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_559132b9-d0d1-47c0-ac52-539a4640facb?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_c7abb0f1-6e66-4a3c-83f7-fba82deb166b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b4892481-befb-4b3a-9629-4f6990e5b801?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_d65a7d01-a714-4f0e-af40-df1d32064c75?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_9e4908f3-41bc-4b7b-85a4-b2fb83944fb1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_0383fd9b-37b0-4229-b7b8-8dab439f2a06?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 45,
    "item": "UFC 4 - Xbox One/Series X",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_0763d2e4-1b09-4798-a27c-053c499f0ddc?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e5b2eedf-de35-48e4-8130-16b25966d4ce?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_2f56a998-cfba-48b8-8fd3-5863970c2112?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_6ff9cad6-6441-4584-9e4e-dd7b53272ae5?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_faa96162-cfd4-4689-9c16-584de9419c84?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_73b78556-58ce-47f2-a160-44a3bf81cf3c?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 46,
    "item": "Minecraft: Dungeons - Xbox One/Series X",
    "price": 29.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_b188d888-a2fe-48bb-a484-fac02eee1338?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_fa6fc813-ee76-42a8-81d3-86e64439d908?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_41d7acac-fae4-4091-935a-3dfa8fa398f9?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_1764d0ae-9c22-4d07-a8d2-0c69e31238a1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a345dfeb-c1bc-4c8c-b0ce-a4ca45d29b28?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b0c6f3a5-5755-4e5d-b52e-fce68462187d?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 47,
    "item": "Sekiro: Shadows Die Twice - Xbox One",
    "price": 48.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_71b80c5b-7b03-4799-a537-e2de9c32d2ff?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f66678e6-2fc4-44bb-a0db-ba4a227c08b3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_1213e2c4-2439-47ff-a830-c1f00f7f540e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3a90671c-db08-4170-b71f-99dfa4632485?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_c1789e47-7975-47aa-b311-f8c88a67f5e2?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_72bf6aa2-4388-49f5-bc7a-db1b5bf1a9a0?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 48,
    "item": "Sackboy: A Big Adventure - PlayStation 4",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_5ad8320a-d3be-4e87-9db7-c364f868701b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_afcfa2b6-9f85-47f6-948d-a8f99fbb7879?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f1da6776-b902-4fe9-be76-7155a865bc03?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e377298e-f30f-43c3-93ce-407cd5316c7b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_00da6740-d335-408b-aab8-662dde4c91e5?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_1c2cec5f-acb1-459b-a54b-6ede513efa04?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 49,
    "item": "Monstrum - PlayStation 4",
    "price": 29.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_178f8fa9-536f-494c-96db-1d43a1086255?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 50,
    "item": "The Last of Us Part II - PlayStation 4",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_14181e72-2322-465b-9549-257c134c3d07?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_abdc96c0-6317-42ff-b1d7-164226826689?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_0601642f-6497-4f15-a1ca-51064e2f697e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_2e361795-222a-4fd0-9151-4c3c1886b4f3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_ef2f57a5-4839-4afe-8f92-227af998df7d?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 51,
    "item": "Final Fantasy VII: Remake - PlayStation 4",
    "price": 49.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_68693479-e289-4996-b58e-d9a94eb0d4cd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_39b10080-b3f7-4880-8f38-81d21de421a8?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3c049ca5-f1bd-4bf9-b077-4d4f99be7e6c?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_0241a922-3ac7-41e8-8bee-ef1a46a64e83?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_bc34c90c-8a59-42fc-a98b-8fe76e948c16?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8b8758e4-b261-450a-a9e6-19eb253429dd?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 52,
    "item": "Plants vs. Zombies: Battle for Neighborville - PlayStation 4",
    "price": 14.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_063e4ffa-b4e1-458a-a299-ac9f9db3583d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b795088b-1774-44fb-8d28-0f3c2383765b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_303ce324-784b-4c9f-8b03-6d3d5bbf319e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_9a10e06d-dd55-4c83-a2fa-319ab47ff03b?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 53,
    "item": "Team Sonic Racing - PlayStation 4",
    "price": 29.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_1b1e2b62-3eab-471a-95ea-06009cc6d376?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8373982f-8d44-443b-b40f-65fd05fce9dd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_2951febd-b2f5-4323-a5a3-ad90cce873a4?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_05c12741-618f-43b6-9e31-e33177ac1275?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 54,
    "item": "LEGO Marvel's Avengers - PlayStation 4 (PlayStation Hits)",
    "price": 19.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_9b3da3c5-ea0b-4f60-98eb-f0c35bd7d74d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a3b7d6bf-6782-4ab7-afdc-a6ea6382caa4?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_fd99e8ba-d61b-41f2-a3e8-72bd832c1264?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_aa7ac14d-5a55-4966-bb97-1f7f536e5c38?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 55,
    "item": "Disney Classic Games: Aladdin and The Lion King - PlayStation 4",
    "price": 19.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_1214bec4-7d89-45c8-8640-31a30e9e2f66?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8f50c3c6-f6a7-46f6-8175-2f7593f99eb3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_93e16a33-24ee-4b85-b8ee-250ea2c37c12?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_604b68b6-9a74-447d-b15d-c6c2503da48d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_26cc4389-93bf-452a-b3c1-facf3a44813f?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_6e73267a-f482-4cfd-a5f9-c29070d38ff6?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 56,
    "item": "Tom Clancy's: The Division 2 - PlayStation 4",
    "price": 16.79,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_a461896a-3b11-472d-942c-4ecd6291f6a3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_fd011350-890a-4a8a-8c62-f666812c8e29?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_9d7717ac-1131-4965-a1e8-30b45d96bfb0?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_87807225-7c7d-42f8-9c84-4009faf92977?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7115bda4-b4c4-4a12-8802-fc2d217a585b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_dbbc5f25-126e-4a1c-924c-4b53498aab50?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 57,
    "item": "Mortal Kombat 11 - PlayStation 4",
    "price": 19.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_c63c985a-8a6c-4082-9ef9-d81b2d3bf6b6?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_d7c7dd2f-3b35-4cd3-9e12-5357199db527?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_89617527-0a6e-44fe-8405-aa4fd01025f1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_92ec6e0f-9aaf-46d2-9a96-e025fcef0064?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id":58,
    "item": "Trials of Mana - PlayStation 4",
    "price": 44.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_a3dd2951-9e90-4219-b733-d0f6cf715d13?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8c7b4944-9b0f-4aff-92c1-b655abfa7fe1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b2795276-4852-459b-be2b-c774662c2988?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_37f0b3e5-5069-4975-afbb-7dea2918b78b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8b53dcc9-bd8a-44cb-a7f6-d012b6e461e2?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_2a4a3317-c77d-4c98-85b2-d4bda52c7466?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 59,
    "item": "Star Wars: Jedi Fallen Order - PlayStation 4",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_63fb6ce9-a11d-43b7-9269-b51b2755b0dd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_599465e8-3af1-4e19-bc86-fb481598f82c?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e306d3c8-fffd-42a3-a115-f968c05defa3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_ebfafdd9-d4a5-4344-a21a-72ed02972419?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7a21b165-088e-4108-8244-82d5781e19d6?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3eadbee6-c1d5-466a-8331-3648e2568ae2?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 60,
    "item": "The Sims 4 + Star Wars: Journey to Batuu Bundle - PlayStation 4",
    "price": 39.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_fc1b9581-a4ac-4435-92e3-b08ab9ec56a0?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5413fd64-6de1-429b-9fc4-9ea4a5df2cac?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_82490199-c4e1-4039-a2dd-23083bb93ca3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_57c6c5d1-ae85-4acf-910a-adfb47c90b09?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e94eb764-a400-4520-97c5-b1082eb1009f?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 61,
    "item": "The Sims 4 - PlayStation 4",
    "price": 30.49,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_f41bcd79-9296-48da-9b77-8a84fc702ea3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a8c04954-f818-4272-b089-da0004e6e987?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_cfa84aca-5b27-4252-a950-1c6f62d09a2e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3d4c9290-6143-4237-8207-5d8716200c35?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a22128fe-6268-4591-8022-039219fd0dd1?fmt=webp&wid=1400&qlt=80"],
    "system": "PS5"
  },
  {
    "id": 62,
    "item": "Ghost of Tsushima - PlayStation 4",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_e0fd643c-39d5-4044-8f58-6b71fe12204a?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_83cd68d1-d80e-4a67-95c9-e60227e505a1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_11b5a94b-fec4-44bb-ad84-8ea7c5dff60d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f2cc2451-03be-45c7-8a8b-bc68d885c985?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_63a666b5-0787-4114-9b3b-ad11f8d03cdb?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_da170eb2-fe28-47cf-9bbd-afa335f80779?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 63,
    "item": "God of War - PlayStation 4 (PlayStation Hits)",
    "price": 19.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_4b1e6d20-2217-45ee-94dc-cf148465b1ad?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_b93d6dce-edd8-48b4-8227-3d1a7de061d4?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5a183faf-2b40-40f1-9f9a-f5e303a5b47d?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_7c606985-f409-4c90-a1ab-b425681e21b5?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_06424433-370c-4b2b-a7c0-d326d6582ff5?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 64,
    "item": "Uncharted: The Lost Legacy - PlayStation 4 (PlayStation Hits)",
    "price": 19.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_b86d93d5-5204-4199-9aaa-da76cc6fb61f?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_0d32988f-0462-4280-844f-ce04bb70fe7f?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_4c4c29e6-a7a4-470e-92e7-e975e6fce155?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_1b9f886b-6383-41af-afa8-7658c58e6e22?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_6c2f4241-23c7-4b5c-bb6b-a4fb574e1ce6?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_be50b13f-9167-4b9d-822d-27c504b7b802?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 65,
    "item": "Gran Turismo Sport - VR Mode Included - PlayStation 4 (PlayStation Hits)",
    "price": 19.79,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_90754d86-6455-4ee0-a557-025f0e594c2e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_06da68e2-ce1e-4436-9f0d-2cf5e5ae3bb7?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_018c1dea-cd67-4fca-bba4-234d94e9eb59?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_727ca8c5-2c02-4967-a9be-62fbf20d772e?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_90274425-bf44-420e-a3ea-d9b53358cbcb?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_4cf69019-3f49-4e72-9d69-1d087121145c?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 66,
    "item":"MediEvil - PlayStation 4",
    "price": 27.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_ea6f604f-c4eb-4ec4-b80f-cc61b80960d4?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_38e1be9d-76aa-48a4-bcc3-4db975c66673?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_a58b87db-739d-4033-a431-c1519ad62f7b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_51bde0aa-91fc-4c8a-9666-9e37fb74e7d1?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_1fdaba1f-413b-4ecc-a396-565baf0895dc?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_bd3ae4b0-5725-4d6a-a470-2e69a7d4fced?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 67,
    "item": "Grand Theft Auto V: Premium Edition - Xbox One",
    "price": 29.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_dac72c06-1562-40d3-b528-ee06afb98449?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_f7bf2558-6b0f-41a4-8569-d1b8b3eb8024?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5b0f8e93-a201-409d-a6ea-1c92c5ef43cb?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3984b4fa-b396-43ad-8885-659f5ab3f3a2?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_3e66c6d6-3b9a-40af-9b3a-f841f12fd93b?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_991e4f45-3356-4039-aab9-9cc4cebfbba9?fmt=webp&wid=1400&qlt=80"],
    "system": "xbox one"
  },
  {
    "id": 68,
    "item": "Call of Duty: Modern Warfare - Xbox One",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_4fcc26d4-307a-4c6f-b35f-39a1ab15f37a?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_107a29df-085b-454e-ac25-6e323a73a082?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e12b5580-8390-401f-9b6e-bb6679ba02cd?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_c07a10d0-709e-4968-8e46-99e87ab63d2a?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_188cd926-a6be-4f94-b3b8-775473e4edd9?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_c4b86ff9-5d94-4b0e-9304-1d5356094727?fmt=webp&wid=1400&qlt=80"],
    "system": "PS4"
  },
  {
    "id": 69,
    "item": "Pokemon Mystery Dungeon Rescue Team DX - Nintendo Switch",
    "price": 59.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_17da95cc-b533-4794-9c18-98ae4ef5a047?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_91ef5938-4016-429a-8285-38f1b17486c3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_40f64668-03a1-4d30-8bc7-671e775739b3?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_6a062cb5-48ce-46cd-b7ea-69139ccb7d47?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_e3fcbf79-c06c-48ce-b9d8-ec82677f2453?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_5c872517-215f-4c0a-817c-13d1489584d5?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  },
  {
    "id": 70,
    "item": "Pokken Tournament DX - Nintendo Switch",
    "price": 58.99,
    "imgUrl": ["https://target.scene7.com/is/image/Target/GUEST_c355a014-afff-4f41-bf5c-6ea579f36697?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8b184e82-738e-4426-9205-0df8b4e45e09?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_300c74ff-888d-4192-9166-6d32732b8da5?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_baa962c0-d251-4512-be49-045ee6abde5a?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_8e46a4d0-5ba0-4350-8d6e-e400ec8211bb?fmt=webp&wid=1400&qlt=80", "https://target.scene7.com/is/image/Target/GUEST_fa1a7e39-e4d5-4b80-a970-8879a0d57fed?fmt=webp&wid=1400&qlt=80"],
    "system": "switch"
  }

]
const seedFunc = (arr) => {
  db.insertMany(arr)
    .then(() => {
      console.log("seeded");
      mongoose.connect.close();
    })
    .catch((err) => {
      console.log("Not seeded");
    })
};

seedFunc(product);


