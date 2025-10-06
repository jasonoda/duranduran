export class Words {

    setUp(e) {
      // Updated data model: each fortune entry is now a 4‑tuple
      // [fortuneText, songRef, endNote, activity]
      // Existing code that only reads [0..2] will continue to work.
  
      // =============================
      // What will the day bring?
      // =============================
      this.fortune1 = [];
  
      this.fortune1.push([
        "What will the day bring? Your inbox is cursed, your coffee betrayed you. ‘Danse Macabre’ called it.",
        "You Better Get Down on Your Knees and Pray",
        "Fortune: ‘You Better Get Down on Your Knees and Pray.’",
        "Activity: Delete three emails you’ll never read. Instant exorcism."
      ]);
  
      this.fortune1.push([
        "Today’s vibe: plans ghosted you, and so did your sense of chill. ‘Super Lonely Freak’ feels seen.",
        "I’m the Super Lonely Freak",
        "Fortune: ‘I’m the Super Lonely Freak.’",
        "Activity: Send the most unhinged meme in your camera roll to the group chat."
      ]);
  
      this.fortune1.push([
        "You’re glowing… but like a mirror found in an abandoned castle. ‘Black Moonlight’ says embrace it.",
        "Black Moonlight, Shining on Me",
        "Fortune: ‘Black Moonlight, Shining on Me.’",
        "Activity: Take a dramatic selfie in bad lighting. Post it anyway."
      ]);
  
      this.fortune1.push([
        "Romance today? Hexed. ‘Love Voudou’ recommends garlic and detachment.",
        "Love Is a Voudou Spell",
        "Fortune: ‘Love Is a Voudou Spell.’",
        "Activity: Text ‘nah’ to someone who doesn’t deserve your energy."
      ]);
  
      this.fortune1.push([
        "Everything’s falling apart, but your outfit could headline. ‘Masque of the Pink Death’ approves.",
        "Masque of the Pink Death",
        "Fortune: ‘Masque of the Pink Death.’",
        "Activity: Overdress for literally no reason today."
      ]);
  
      this.fortune1.push([
        "Overshared, instantly regretted. ‘Confession in the Afterlife’ says keep it in drafts.",
        "Confession in the Afterlife",
        "Fortune: ‘Confession in the Afterlife.’",
        "Activity: Write the text you want to send… then delete it."
      ]);
  
      this.fortune1.push([
        "Chaos, deadlines, drama — but at least you look iconic. ‘Danse Macabre’ recommends a smokey eye.",
        "Jumpin’ on the Hot Seat, Lyin’ in the Deadpool",
        "Fortune: ‘Jumpin’ on the Hot Seat, Lyin’ in the Deadpool.’",
        "Activity: Soundtrack your stress with the most dramatic Duran track."
      ]);
  
      this.fortune1.push([
        "Your optimism left early. ‘Paint It Black’ says lean into the void with style.",
        "Paint It Black",
        "Fortune: ‘Paint It Black.’",
        "Activity: Change your phone wallpaper to something moody and iconic."
      ]);
  
      this.fortune1.push([
        "You’re chained to your to‑do list, but make it fashion. ‘Spellbound’ says just vibe.",
        "Spellbound, I’m Under Your Control",
        "Fortune: ‘Spellbound, I’m Under Your Control.’",
        "Activity: Skip one task and do something indulgent instead."
      ]);
  
      this.fortune1.push([
        "Patience tested, nerves frayed. ‘Psycho Killer’ says smile, vanish.",
        "Psycho Killer, Qu’est‑Ce Que C’est?",
        "Fortune: ‘Psycho Killer, Qu’est‑Ce Que C’est?’",
        "Activity: Ghost one notification. Feel the power."
      ]);
  
      this.fortune1.push([
        "It’s dark, but truth is still hiding in the glow. ‘Night Boat’ will find it.",
        "When the Lights of Hope Are Fading Quickly",
        "Fortune: ‘When the Lights of Hope Are Fading Quickly.’",
        "Activity: Go outside after sunset. Look for neon or moonlight."
      ]);
  
      this.fortune1.push([
        "Same mistakes, better soundtrack. ‘Danse Macabre’ says dance anyway.",
        "Shackled to the Rhythm, Your Soul Is Weighed",
        "Fortune: ‘Shackled to the Rhythm, Your Soul Is Weighed.’",
        "Activity: Put on headphones and dance like nobody’s buffering."
      ]);
  
      this.fortune1.push([
        "Today brings unsolicited noise — ignore it, turn up your anthem, and drown them out. Shadows on Your Side says: Volume solves everything.",
        "They Want You to Speak but the Music Is Louder Than All of Their Roar",
        "Fortune: ‘They Want You to Speak but the Music Is Louder Than All of Their Roar.’",
        "Activity: Post your current obsession track on stories with ‘today’s mood: loud.’"
      ]);
  
      // Social‑forward alternates (IG story prompts)
      this.fortune1.push([
        "Ghosted by plans and haunted by your own awkwardness. ‘Super Lonely Freak’ is your spirit animal.",
        "I’m the Super Lonely Freak",
        "Alt: Today’s vibe post.",
        "Activity: Drop a funny reaction meme on stories captioned ‘super lonely freak hours.’"
      ]);
  
      this.fortune1.push([
        "You’re glowing… like a cursed antique mirror. ‘Black Moonlight’ says embrace the drama.",
        "Black Moonlight, Shining on Me",
        "Alt: Moody mirror moment.",
        "Activity: Take a moody mirror selfie and caption it ‘black moonlight glow.’"
      ]);
  
      this.fortune1.push([
        "Romance today? Hexed. ‘Love Voudou’ recommends garlic and emotional boundaries.",
        "Love Is a Voudou Spell",
        "Alt: Boundaries > butterflies.",
        "Activity: Post a poll ‘romance today: cursed or blessed?’"
      ]);
  
      this.fortune1.push([
        "You’ll look fabulous while everything falls apart. ‘Masque of the Pink Death’ approves.",
        "Masque of the Pink Death",
        "Alt: Doom but make it couture.",
        "Activity: Fit‑check post captioned ‘pink death chic.’"
      ]);
  
      this.fortune1.push([
        "You’ll overshare and regret it. ‘Confession in the Afterlife’ says: maybe just text your therapist.",
        "Confession in the Afterlife",
        "Alt: Drafts are self‑care.",
        "Activity: Post a one‑line confession with no context."
      ]);
  
      this.fortune1.push([
        "You’re in trouble. But at least it’s stylish. ‘Danse Macabre’ recommends dramatic eyeliner.",
        "Jumpin’ on the Hot Seat, Lyin’ in the Deadpool",
        "Alt: Trouble but cute.",
        "Activity: Eyeliner selfie captioned ‘deadpool glam.’"
      ]);
  
      this.fortune1.push([
        "Your optimism has left the chat. ‘Paint It Black’ says: lean into the void.",
        "Paint It Black",
        "Alt: Embrace the noir.",
        "Activity: All‑black flatlay with ‘paint it black mood.’"
      ]);
  
      this.fortune1.push([
        "Your to‑do list owns you now. ‘Spellbound’ says resistance is futile — just vibe.",
        "Spellbound, I’m Under Your Control",
        "Alt: Productive possession.",
        "Activity: Screenshot your reminders with ‘spellbound energy.’"
      ]);
  
      this.fortune1.push([
        "Someone’s going to test your patience. ‘Psycho Killer’ says: smile sweetly… then disappear.",
        "Psycho Killer, Qu’est‑Ce Que C’est?",
        "Alt: Vanish gracefully.",
        "Activity: Set DND and post ‘psycho killer mode.’"
      ]);
  
      this.fortune1.push([
        "Even in the dark, truth is waiting to light the way. ‘Night Boat’ will help you find it.",
        "When the Lights of Hope Are Fading Quickly",
        "Alt: Neon therapy.",
        "Activity: Snap a neon sign pic captioned ‘hope fading, neon rising.’"
      ]);
  
      this.fortune1.push([
        "You’re stuck in a loop of bad decisions and worse playlists. ‘Danse Macabre’ says: dance through the doom.",
        "Shackled to the Rhythm, Your Soul Is Weighed",
        "Alt: Doom disco.",
        "Activity: Post a clip of you dancing to the worst song on your playlist."
      ]);
  
      this.fortune1.push([
        "Unsolicited noise? Ignore it and turn it up. Shadows on Your Side says: Volume solves everything.",
        "They Want You to Speak but the Music Is Louder Than All of Their Roar",
        "Alt: Loud > opinionated.",
        "Activity: Share your current obsession track with caption ‘today’s mood: loud.’"
      ]);
  
      // =============================
      // When will I find Love?
      // =============================
      this.fortune2 = [];
  
      this.fortune2.push([
        "Love is creeping in — slowly, dramatically, and probably wearing leather. Night Boat says: Don’t blink.",
        "I See the Shadows Dancing on the Wall",
        "Fortune: ‘I See the Shadows Dancing on the Wall.’",
        "Activity: Post a silhouette or shadow selfie with the caption ‘don’t blink.’"
      ]);
  
      this.fortune2.push([
        "You’ll fall for someone who makes you forget your ex and your dignity. Spellbound knows it’s messy.",
        "You Cast a Spell I Can’t Undo",
        "Fortune: ‘You Cast a Spell I Can’t Undo.’",
        "Activity: Build a 7‑song ‘dangerous crush’ playlist and share the title."
      ]);
  
      this.fortune2.push([
        "You’ll find love when someone finally gets your chaotic energy. Super Lonely Freak says: Embrace the weird.",
        "I’m Not Your Enemy, I’m Just Misunderstood",
        "Fortune: ‘I’m Not Your Enemy, I’m Just Misunderstood.’",
        "Activity: Share one quirky trait on stories with ‘take it or leave it.’"
      ]);
  
      this.fortune2.push([
        "You’re about to be emotionally kidnapped. Evil Woman says: Enjoy the ride, but keep your wallet close.",
        "She’s Got the Power to Hypnotize",
        "Fortune: ‘She’s Got the Power to Hypnotize.’",
        "Activity: Post a close‑up gaze pic with the caption ‘blink first.’"
      ]);
  
      this.fortune2.push([
        "Love will strike like lightning — dramatic, inconvenient, and possibly haunted. Supernature approves.",
        "I Feel the Heat, It’s Supernatural",
        "Fortune: ‘I Feel the Heat, It’s Supernatural.’",
        "Activity: Slide into someone’s DMs with the most chaotic opener you can think of."
      ]);
  
      this.fortune2.push([
        "You’re still hung up on someone who vanished mid‑text. Ghost Town says: Delete the number.",
        "I’m Dancing with the Ghost of You",
        "Fortune: ‘I’m Dancing with the Ghost of You.’",
        "Activity: Rename an old contact to ‘ghost #47’ and then block them."
      ]);
  
      this.fortune2.push([
        "You’ll find love when you stop romanticizing your heartbreak playlist. Paint It Black says: Skip the sad songs.",
        "I’m Painting Over Memories in Black",
        "Fortune: ‘I’m Painting Over Memories in Black.’",
        "Activity: Replace one breakup song with an unhinged party banger and blast it."
      ]);
  
      this.fortune2.push([
        "You’ll meet someone under questionable astrological conditions. New Moon (Dark Phase) says: Blame the stars.",
        "The Moon Is Rising, and So Is the Madness",
        "Fortune: ‘The Moon Is Rising, and So Is the Madness.’",
        "Activity: Read your horoscope out loud like it’s a roast."
      ]);
  
      this.fortune2.push([
        "You’ll fall for someone mysterious. Or just emotionally unavailable. Secret Oktober 31st says: Good luck.",
        "Secrets Whispered in the Dark",
        "Fortune: ‘Secrets Whispered in the Dark.’",
        "Activity: Post a ‘secret’ that’s clearly fake but sounds juicy."
      ]);
  
      this.fortune2.push([
        "You’ll find love when you stop emotionally ghosting yourself. Bury a Friend says: Maybe try vulnerability.",
        "I Buried a Friend, Now I’m Burying Feelings",
        "Fortune: ‘I Buried a Friend, Now I’m Burying Feelings.’",
        "Activity: Write one brutally honest note to yourself and lock it in Notes like a vault."
      ]);
  
      this.fortune2.push([
        "You’ll fall for someone who’s charming, confusing, and probably has three phones. Love Voudou says: Check the receipts.",
        "I’m Tangled in Your Web of Lies",
        "Fortune: ‘I’m Tangled in Your Web of Lies.’",
        "Activity: Reply to a text with ‘ok detective’ and nothing else."
      ]);
  
      this.fortune2.push([
        "You’ll find love in the middle of chaos. Danse Macabre says: Bring popcorn and emotional insurance.",
        "We’re Dancing Through the Fire",
        "Fortune: ‘We’re Dancing Through the Fire.’",
        "Activity: Light a candle, blast a dramatic track, and film yourself vibing like you’re in a movie trailer."
      ]);
  
      // Additional alternates mirrored (condensed where repeats occurred)
      this.fortune2.push([
        "You’ll find love at 2am, under neon shadows, texting someone you swore you wouldn’t. Shadows on Your Side says: Bad lighting, great chemistry.",
        "In the Darkest Place You Can Find, You Belong to the Hands of the Night",
        "Fortune: Late‑night chemistry finds you.",
        "Activity: Send a 2am ‘u up?’ text… to yourself. Then answer it."
      ]);
  
      this.fortune2.push([
        "Glamorous chaos — everything’s falling apart and you still look iconic. Masque of the Pink Death says: Disaster is the meet‑cute.",
        "Masque of the Pink Death",
        "Fortune: ‘Masque of the Pink Death.’",
        "Activity: Drop a fit‑check captioned ‘uninvited, unbothered.’"
      ]);
  
      this.fortune2.push([
        "Love arrives late, dramatic, and dripping in mood. Night Boat says: Love’s never early, only cinematic.",
        "I’m Waiting for the Night Boat",
        "Fortune: ‘I’m Waiting for the Night Boat.’",
        "Activity: Post a silhouette shot captioned ‘night boat o’clock.’"
      ]);
  
      this.fortune2.push([
        "Under black moonlight — fueled by caffeine, eyeliner, and bad lighting. Black Moonlight says: Romance glows like a cursed mirror.",
        "Alive in the Dead of Night / Black Moonlight",
        "Fortune: Night glam > daylight clarity.",
        "Activity: Chaotic‑lighting selfie captioned ‘black moonlight energy.’"
      ]);
  
      this.fortune2.push([
        "Mistaking aesthetics for destiny — red flag, pretty flag, same flag. Love Voudou says: Pretty lies make the best first dates.",
        "You Caught Me in Your Web of Youth",
        "Fortune: Webs look good until they don’t.",
        "Activity: Story poll: ‘red flag / pretty flag.’"
      ]);
  
      this.fortune2.push([
        "Stop replying just to fill the silence — ghosting counts as growth. Bury a Friend says: Self‑control is a luxury.",
        "Step on the Glass, Staple Your Tongue",
        "Fortune: Boundaries are hot.",
        "Activity: Mute one notification; post ‘self‑preservation hour.’"
      ]);
  
      this.fortune2.push([
        "Find love in the weird — strange coincidences, feral vibes, cosmic accidents. Supernature says: Love sneaks in sideways.",
        "Supernature, Better Watch Out! Look at You Now!",
        "Fortune: Follow the odd breadcrumbs.",
        "Activity: Post the strangest pic in your camera roll."
      ]);
  
      this.fortune2.push([
        "Serve villain arc chic. Evil Woman says: Glamour attracts the bold ones.",
        "Evil Woman — What You Gonna Do?",
        "Fortune: Antagonist energy, romantic results.",
        "Activity: Close‑crop eye shot captioned ‘evil woman stare.’"
      ]);
  
      this.fortune2.push([
        "Clear the dead weight — inbox, exes, everything. Danse Macabre says: Purge first, flirt later.",
        "You Better Get Down on Your Knees and Pray",
        "Fortune: Purification ritual = attractive.",
        "Activity: Delete 3 messages you’ll never read, caption ‘exorcised.’"
      ]);
  
      this.fortune2.push([
        "Love reveals itself before the song ends. Secret Oktober 31st says: Love leaks through rumors.",
        "Sure Eyes Awake Before the Dancing Is Over",
        "Fortune: Timing is gossip.",
        "Activity: Fake ‘secret’ poll with two silly options."
      ]);
  
      this.fortune2.push([
        "Leave the place that drains you. Ghost Town says: Silence is the first step.",
        "This Town Is Coming Like a Ghost Town",
        "Fortune: Freedom is the meet‑cute.",
        "Activity: Empty street photo captioned ‘ghost town exit.’"
      ]);
  
      this.fortune2.push([
        "Reinvention attracts. Paint It Black says: Transformation is the bait.",
        "I See Your Red Door, I Say Paint It Black",
        "Fortune: New look, new storyline.",
        "Activity: All‑black OOTD captioned ‘paint it black.’"
      ]);
  
      this.fortune2.push([
        "Solo arc first, romance later. Super Lonely Freak says: Independence is irresistible.",
        "Because You’re Lonely in Your Nightmare, Let Me In",
        "Fortune: Main character energy.",
        "Activity: Solo date selfie captioned ‘super lonely freak + thriving’."
      ]);
  
      this.fortune2.push([
        "Fresh start masquerading as chaos. New Moon (Dark Phase) says: Love begins where mess begins.",
        "New Moon on Monday",
        "Fortune: Reset = romance magnet.",
        "Activity: Notes screenshot titled ‘new chapter’ with one tiny goal."
      ]);
  
      this.fortune2.push([
        "Give in to temptation and press send. Spellbound says: Risk is romance.",
        "From the Cradle Bars Comes a Beckoning Voice",
        "Fortune: Texts as fate.",
        "Activity: 5‑sec story of you hitting ‘send.’"
      ]);
  
      this.fortune2.push([
        "Stop arguing with red flags; run toward green ones. Psycho Killer says: Escape clears space for love.",
        "Psycho Killer, Qu’est‑Ce Que C’est? Run, Run, Run",
        "Fortune: Exit > explain.",
        "Activity: DND timer screenshot captioned ‘self‑preservation hour.’"
      ]);
  
      this.fortune2.push([
        "Drop the polite lies. Confession in the Afterlife says: Brutal honesty is hot.",
        "These Are Words Fallen from Fire",
        "Fortune: Truth, unfiltered.",
        "Activity: Post a one‑line confession, no context."
      ]);
  
      this.fortune2.push([
        "Stop performing for the crowd; notice who’s watching quietly. Shadows on Your Side says: Love looks better offstage.",
        "Shackled and Raised for a Shining Crowd",
        "Fortune: Quiet gaze > loud room.",
        "Activity: Selfie captioned ‘prisoner of the group chat.’"
      ]);
  
      this.fortune2.push([
        "Mute the time‑waster. Shadows on Your Side says: Silence clears space for romance.",
        "Hey You’ll Never Hear That Voice Again",
        "Fortune: Mute > closure.",
        "Activity: Screenshot a muted chat captioned ‘liberation.’"
      ]);
  
      this.fortune2.push([
        "Drama disguised as elegance — crash the wedding energy.",
        "Scandal in White on a Tangled Vine",
        "Fortune: Pretty is a plot.",
        "Activity: White OOTD pic captioned ‘scandal in white.’"
      ]);
  
      this.fortune2.push([
        "Spin anyway — chaos counts as destiny.",
        "Spinning a Compass to Choose Your Way",
        "Fortune: Fate via roulette.",
        "Activity: Random maps pin captioned ‘new destiny unlocked.’"
      ]);
  
      // =============================
      // What Is the Meaning of Life?
      // =============================
      this.fortune3 = [];
  
      this.fortune3.push([
        "Life is about surviving chaos with style. Danse Macabre says: Wear sequins to your breakdown.",
        "Alive in the Dead of Night",
        "Fortune: ‘Alive in the Dead of Night.’",
        "Activity: Post your most overdressed‑for‑no‑reason selfie with the caption ‘chaos, but make it couture.’"
      ]);
  
      this.fortune3.push([
        "Keep moving, even when everything’s burning. Danse Macabre recommends dramatic lighting.",
        "We’re Dancing Through the Fire",
        "Fortune: ‘We’re Dancing Through the Fire.’",
        "Activity: Film a 5‑second candlelit dance and drop it on your story."
      ]);
  
      this.fortune3.push([
        "Life is just a spooky projection of your own thoughts. Night Boat says: Maybe stop overthinking.",
        "I See the Shadows Dancing on the Wall",
        "Fortune: Shadow theater = you.",
        "Activity: Take a blurry after‑midnight pic and tag it ‘night boat hours.’"
      ]);
  
      this.fortune3.push([
        "You’re not supposed to understand life — just vibe with it. Supernature says: Embrace the weird.",
        "Supernature Rules the Night",
        "Fortune: Weird is the point.",
        "Activity: Share the strangest thing in your camera roll — no context."
      ]);
  
      this.fortune3.push([
        "Life is messy, confusing, and probably gaslighting you. Love Voudou says: Trust no one, especially your horoscope.",
        "I’m Tangled in Your Web of Lies",
        "Fortune: Doubt the filter.",
        "Activity: Screenshot your horoscope and circle the most toxic line — caption it ‘love voudou approved.’"
      ]);
  
      this.fortune3.push([
        "The meaning of life is hidden in gossip and late‑night thoughts. Secret Oktober 31st says: Listen closely.",
        "Secrets Whispered in the Dark",
        "Fortune: Gossip = data.",
        "Activity: Post a ‘secret’ on Close Friends that’s actually just funny."
      ]);
  
      this.fortune3.push([
        "Life will seduce you, confuse you, and leave you wondering what just happened. That’s Evil Woman energy.",
        "She’s Got the Power to Hypnotize",
        "Fortune: Glamour is a teacher.",
        "Activity: Post your best stare‑down selfie with the caption ‘evil woman energy.’"
      ]);
  
      this.fortune3.push([
        "Maybe life isn’t out to get you — it just doesn’t speak your language. Super Lonely Freak gets it.",
        "I’m Not Your Enemy, I’m Just Misunderstood",
        "Fortune: Misfit = manual unavailable.",
        "Activity: Drop your most unhinged meme on stories with ‘my love language.’"
      ]);
  
      this.fortune3.push([
        "Life is a game show with no rules and questionable prizes. Danse Macabre thinks you’re winning… maybe.",
        "Jumpin’ on the Hot Seat, Lyin’ in the Deadpool",
        "Fortune: The prize is the chaos.",
        "Activity: Post a poll with two equally bad choices; let followers decide."
      ]);
  
      this.fortune3.push([
        "Life isn’t about finding meaning — it’s about making it look cool. Paint It Black is all about the aesthetic.",
        "Paint It Black",
        "Fortune: Aesthetic > answers.",
        "Activity: Post your current vibe in all‑black with the caption ‘paint it black.’"
      ]);
  
      this.fortune3.push([
        "You won’t understand life until it’s over — and even then, it’s probably a plot twist.",
        "Confession in the Afterlife",
        "Fortune: Cliffhanger cosmology.",
        "Activity: Post a one‑line ‘confession’ and let people guess the context."
      ]);
  
      this.fortune3.push([
        "Truth bends to its own beat. Shadows on Your Side says: Bend with the tune.",
        "Truth Should Be Known, It Can Only Bend to a Tune of Its Own",
        "Fortune: Remix reality.",
        "Activity: Run a poll: ‘Truth or remix?’ Let your followers decide your philosophy."
      ]);
  
      this.fortune3.push([
        "Life = performance art. Applause is rented, not owned.",
        "Shackled and Raised for a Shining Crowd",
        "Fortune: Play the part, then vanish.",
        "Activity: Post a deadpan selfie captioned ‘applause track (demo).’"
      ]);
  
      this.fortune3.push([
        "Turn your volume up until the noise quits.",
        "They Want You to Speak but the Music Is Louder…",
        "Fortune: Volume is self‑care.",
        "Activity: Story your ‘song of the day’ with ‘can’t hear you.’"
      ]);
  
      this.fortune3.push([
        "Life loves drama. It’ll overheat your tea for no reason.",
        "With the Heat off the Planet’s Core",
        "Fortune: Stay hot, not bothered.",
        "Activity: Invite a friend for tea, spill one secret, and have a toast."
      ]);
  
      this.fortune3.push([
        "Life rewards night owls. Your best ideas clock in after 11.",
        "In the Darkest Place You Can Find…",
        "Fortune: Nocturnal = productive.",
        "Activity: Post a moody night shot: ‘hands of the night.’"
      ]);
  
      this.fortune3.push([
        "Plans are lore; invitations are vibes.",
        "Promises Made with a Distant Friend",
        "Fortune: Calendar as fiction.",
        "Activity: Poll: ‘Raincheck / rain lie.’"
      ]);
  
      this.fortune3.push([
        "Mute button > closure.",
        "Hey You’ll Never Hear That Voice Again",
        "Fortune: Silence is premium.",
        "Activity: Screenshot a muted thread with ‘liberated.’"
      ]);
  
      this.fortune3.push([
        "Pretty is a plot; don’t fall for the filter.",
        "Scandal in White on a Tangled Vine",
        "Fortune: Beauty can be bait.",
        "Activity: Post your cleanest pic, confess one tiny chaos in text."
      ]);
  
      this.fortune3.push([
        "If it’s downhill, make it a waterslide.",
        "When Your Life Is on the Slide",
        "Fortune: Chaos = momentum.",
        "Activity: Boomerang anything sliding (drawer, sock, you)."
      ]);
  
      this.fortune3.push([
        "None of us know; spin anyway.",
        "Spinning a Compass to Choose Your Way",
        "Fortune: Randomness counts as fate.",
        "Activity: Drop a random pin, post ‘new destiny unlocked.’"
      ]);
  
      this.fortune3.push([
        "Any option works if it’s yours.",
        "You Can Run, You Can Dive, You Can Stand, You Can Soar",
        "Fortune: Choose, then strut.",
        "Activity: Poll: ‘Run / dive / stand / soar.’ Pick, commit."
      ]);
  
      this.fortune3.push([
        "Glam is a survival tactic.",
        "Masque of the Pink Death",
        "Fortune: If it’s doom, make it couture.",
        "Activity: Add one absurdly extra accessory; post ‘survival look.’"
      ]);
  
      this.fortune3.push([
        "Show up late but iconic.",
        "I’m Waiting for the Night Boat",
        "Fortune: Delays are part of the entrance.",
        "Activity: Silhouette pic with ‘nightboat o’clock.’"
      ]);
  
      this.fortune3.push([
        "It’s not clarity, it’s charisma. Close enough.",
        "Black Moonlight, Shining on Me",
        "Fortune: Glow > sense.",
        "Activity: Mirror selfie in chaotic lighting: ‘black moonlight energy.’"
      ]);
  
      this.fortune3.push([
        "Illusions everywhere—enjoy, fact‑check later.",
        "Love Is a Voudou Spell",
        "Fortune: Vibes first, receipts later.",
        "Activity: Post a prediction and let replies roast it."
      ]);
  
      this.fortune3.push([
        "Life wants drama; you give boundaries.",
        "Step on the Glass, Staple Your Tongue",
        "Fortune: Protect your peace, not their feelings.",
        "Activity: DND on, screenshot with ‘nope.’"
      ]);
  
      this.fortune3.push([
        "Follow the weird breadcrumb trail.",
        "Supernature… Look at You Now!",
        "Fortune: Weird is the waypoint.",
        "Activity: Share the strangest photo in your camera roll—no context."
      ]);
  
      this.fortune3.push([
        "Life reveals spoilers mid‑party.",
        "Sure Eyes Awake Before the Dancing Is Over",
        "Fortune: Gossip is data.",
        "Activity: Two‑option ‘secret’ poll (both fake)."
      ]);
  
      this.fortune3.push([
        "Solitude is the flex; connection is the plot twist.",
        "Because You’re Lonely in Your Nightmare, Let Me In",
        "Fortune: Main character, party of one.",
        "Activity: Solo coffee selfie: ‘date quality: excellent.’"
      ]);
  
      this.fortune3.push([
        "Reset disguised as mess—begin anyway.",
        "New Moon on Monday",
        "Fortune: Chaos counts as a fresh start.",
        "Activity: Notes screenshot titled ‘new chapter’ with one micro‑goal."
      ]);
  
      this.fortune3.push([
        "Temptation is the syllabus. Surrender, but make it cute.",
        "From the Cradle Bars Comes a Beckoning Voice",
        "Fortune: Press send as ritual.",
        "Activity: 5‑sec story of you pressing ‘send.’"
      ]);
  
      this.fortune3.push([
        "Don’t argue with nonsense—mute and move.",
        "Psycho Killer, Qu’est‑Ce Que C’est?",
        "Fortune: Exit > debate.",
        "Activity: DND timer story: ‘self‑preservation hour.’"
      ]);
  
      this.fortune3.push([
        "Ah yes—truth, delivered spicy.",
        "These Are Words Fallen from Fire",
        "Fortune: Overshare, then hydrate.",
        "Activity: One‑line confession; let replies guess the lore."
      ]);
  
      // =============================
      // What Is My Next Adventure?
      // =============================
      this.fortune4 = [];
  
      this.fortune4.push([
        "Your next adventure: total transformation. Supernature says the potion’s already working.",
        "The potions that we made touched the creatures down below",
        "Fortune: Potion arc unlocked.",
        "Activity: Post your most unhinged glow‑up pic with the caption ‘supernature shift.’"
      ]);
  
      this.fortune4.push([
        "Your next adventure: letting go, dramatically. Paint It Black says clear the path.",
        "Dead flowers and my love, both never to come back",
        "Fortune: Release ritual.",
        "Activity: Post a ‘good riddance’ story with a black heart."
      ]);
  
      this.fortune4.push([
        "Full speed ahead, no brakes. Danse Macabre says buckle up.",
        "Some ghost jive in an AC Cobra",
        "Fortune: Chaos commute.",
        "Activity: Share your most chaotic driving playlist on stories."
      ]);
  
      this.fortune4.push([
        "Mystery and midnight vibes. Black Moonlight says lean into the unknown.",
        "Hold tight, you’re going out tonight, under the black moonlight",
        "Fortune: Night mission.",
        "Activity: Post a night pic with the caption ‘black moonlight energy.’"
      ]);
  
      this.fortune4.push([
        "Chance encounter, messy but thrilling. Love Voudou approves.",
        "You’ll meet a stranger on the roof who catches you in a web of youth",
        "Fortune: Rooftop lore.",
        "Activity: Post a rooftop pic captioned ‘love voudou moment.’"
      ]);
  
      this.fortune4.push([
        "Passion sets the tone. Black Moonlight lights the way.",
        "Fire of desire paints your shadow against the wall",
        "Fortune: Silhouette omen.",
        "Activity: Snap a silhouette in low light and post ‘fire of desire.’"
      ]);
  
      this.fortune4.push([
        "Risk, drama, maybe even a reality show audition. Danse Macabre is already watching.",
        "Jumpin’ on the hot seat, lyin’ in the deadpool",
        "Fortune: High‑stakes camp.",
        "Activity: Poll: ‘would i survive on reality tv?’ yes / absolutely not."
      ]);
  
      this.fortune4.push([
        "Decide what (or who) you’re done with. Bury a Friend says closure is chic.",
        "Bury the hatchet or bury a friend",
        "Fortune: Choice as portal.",
        "Activity: Post a cryptic ‘done + dusted’ note."
      ]);
  
      this.fortune4.push([
        "Plot twists incoming. Black Moonlight says brace yourself.",
        "Drama on the wall",
        "Fortune: Mirror omen.",
        "Activity: Post a dramatic mirror selfie captioned ‘wall‑to‑wall drama.’"
      ]);
  
      this.fortune4.push([
        "It’s already in sight — just grab it. Paint It Black gives courage.",
        "Look hard enough into the setting sun, and your love will be laughing at you before the morning comes",
        "Fortune: Sunset crossing.",
        "Activity: Sunset pic captioned ‘endings = beginnings.’"
      ]);
  
      this.fortune4.push([
        "Crash a party uninvited and steal the spotlight. Danse Macabre says gatecrash chic.",
        "Halloween girl, seize the fray",
        "Fortune: Gatecrash glam.",
        "Activity: Boldest outfit pic captioned ‘uninvited, unbothered.’"
      ]);
  
      this.fortune4.push([
        "Mysterious, moody, after midnight. Night Boat knows you’re ready.",
        "I see the shadows dancing on the wall",
        "Fortune: After‑hours omen.",
        "Activity: Silhouette story captioned ‘night boat energy.’"
      ]);
  
      this.fortune4.push([
        "Wild, weird, maybe haunted. Supernature says pack sage.",
        "I feel the heat, it’s supernatural",
        "Fortune: Haunting with benefits.",
        "Activity: Share the most cursed pic in your camera roll — no context."
      ]);
  
      this.fortune4.push([
        "Falling under a spell you can’t break. Evil Woman approves.",
        "She’s got the power to hypnotize",
        "Fortune: Bewitched POV.",
        "Activity: Close‑up eye pic captioned ‘evil woman stare.’"
      ]);
  
      this.fortune4.push([
        "Juicy revelations. Secret Oktober 31st says lean in, but beware.",
        "Secrets whispered in the dark",
        "Fortune: Redacted spoilers.",
        "Activity: Post a fake ‘secret’ poll with two silly options."
      ]);
  
      this.fortune4.push([
        "Dive into flames (hopefully metaphorical). Danse Macabre says look iconic while it burns.",
        "We’re dancing through the fire",
        "Fortune: Torch song arc.",
        "Activity: Candlelit boomerang captioned ‘into the fire.’"
      ]);
  
      this.fortune4.push([
        "Deception, drama, maybe a love triangle. Love Voudou says bring popcorn.",
        "I’m tangled in your web of lies",
        "Fortune: Triangle season.",
        "Activity: Messy group selfie captioned ‘love voudou vibes.’"
      ]);
  
      this.fortune4.push([
        "A healing trip disguised as a road trip. Bury a Friend says closure comes with snacks.",
        "I buried a friend, now I’m burying feelings",
        "Fortune: Snacks & closure.",
        "Activity: Packed bag pic captioned ‘running away or healing? yes.’"
      ]);
  
      this.fortune4.push([
        "Leave what drains you. Ghost Town says hit the road.",
        "This town is coming like a ghost town",
        "Fortune: Exit strategy.",
        "Activity: Story your dream destination with the caption ‘ghost town escape.’"
      ]);
  
      this.fortune4.push([
        "Bold reinvention — makeover or meltdown. Paint It Black says commit to the bit.",
        "Paint it black",
        "Fortune: Commit to noir.",
        "Activity: All‑black fit check captioned ‘paint it black.’"
      ]);
  
      this.fortune4.push([
        "Solo arc with unexpected flings. Super Lonely Freak says independence is spicy.",
        "Because you’re lonely in your nightmare, let me in",
        "Fortune: Lone wolf lore.",
        "Activity: Solo coffee selfie captioned with your most iconic line."
      ]);
  
      this.fortune4.push([
        "A fresh start disguised as chaos. New Moon (Dark Phase) says delulu is destiny.",
        "New moon on Monday",
        "Fortune: Reset sequence.",
        "Activity: Notes app screenshot titled ‘new chapter’ with one random goal."
      ]);
  
      this.fortune4.push([
        "Giving in to temptation — chicly. Spellbound says surrender is stylish.",
        "From the cradle bars comes a beckoning voice",
        "Fortune: Glam surrender.",
        "Activity: 5‑sec ‘press send’ story."
      ]);
  
      this.fortune4.push([
        "Someone tests you, but the escape is clean. Psycho Killer says mute is sexy.",
        "Psycho killer, qu’est‑ce que c’est?",
        "Fortune: Exit in heels.",
        "Activity: DND screenshot captioned ‘self‑preservation hour.’"
      ]);
  
      this.fortune4.push([
        "Blunt truths, drama included. Confession in the Afterlife says plot twists are eternal.",
        "These are words fallen from fire",
        "Fortune: Flaming honesty.",
        "Activity: Post a one‑liner ‘confession’ with no context."
      ]);
  
      this.fortune4.push([
        "Pushed on stage with no rehearsal. Shadows on Your Side says improvise.",
        "Shackled and raised for a shining crowd",
        "Fortune: Wing it, win it.",
        "Activity: Chaotic candid captioned ‘winging it.’"
      ]);
  
      this.fortune4.push([
        "Choosing noise over advice. Shadows on Your Side says soundtrack > lecture.",
        "They want you to speak but the music is louder…",
        "Fortune: Anthem over input.",
        "Activity: Post your day’s anthem captioned ‘drowning you out.’"
      ]);
  
      this.fortune4.push([
        "Midnight decisions that feel like destiny. Shadows on Your Side says the dark hours choose you.",
        "In the darkest place you can find…",
        "Fortune: Night chooses.",
        "Activity: Moody night pic captioned ‘hands of the night.’"
      ]);
  
      this.fortune4.push([
        "Fake plans that still feel exciting. Shadows on Your Side says flakiness is art.",
        "Promises made with a distant friend",
        "Fortune: RSVP: maybe.",
        "Activity: Poll: ‘raincheck / rain never.’"
      ]);
  
      this.fortune4.push([
        "Drama disguised as elegance. Shadows on Your Side says elegance is a cover story.",
        "Scandal in white on a tangled vine",
        "Fortune: Lace over lava.",
        "Activity: Chaotic good pic captioned ‘scandal chic.’"
      ]);
  
      this.fortune4.push([
        "Enjoy the fall — scream like it’s fun. Shadows on Your Side says gravity is a plot device.",
        "When your life is on the slide",
        "Fortune: Whee‑therapy.",
        "Activity: Boomerang something sliding captioned ‘life on the slide.’"
      ]);
  
      this.fortune4.push([
        "Pure delulu navigation. Shadows on Your Side says chaos counts as direction.",
        "Spinning a compass to choose your way",
        "Fortune: Spin to win.",
        "Activity: Drop a random maps pin, screenshot it, and post ‘next stop???’"
      ]);
    }
  }
  