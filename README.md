# A Robot Walkin'n'Shootin game

This is a game that was inspired by Timeline Up, which I played without spending any real money.

Runs on [github pages](https://jacekkopecky.github.io/rwns). Intended to run on a portrait-oriented
mobile screen.

See `./AGENTS.md` and `./TESTING.md` for various instructions for consistency.

## todo

- [ ] sections that slide out to the sides should have a delayed display:none style so it's just not
      there most of the time
- [.] first side game: back to basics
  - [x] phase 1:
    - add a new "section" wired into sections.ts for this side-game
    - the section is opened with the backToBasics button in sectionButtons
    - when active, main section is hidden
    - the new section has a "back to main screen" button that's in the same place as the normal exit
      button
    - in this side game, the run is simply level 1
    - the new section code replicates main screen functionality for setting up and starting a run,
      and it reuses the prepareRun() function but adds a runType parameter defaulted to 'normal'
      which is the existing behaviour, and 'backToBasics' which is the new side-game type
    - add playwright tests for the transitions, custom message; render and do a full screenshot
  - cleanups after AI's phase 1
    - [x] extract touch to start etc into aside
    - [x] extract startPlaying touchstart/mousedown handler into run so it can easier be ignored
          when already playing; if not playing, ask sections to run the current section's
          startPlaying and if it returns true, actually start playing
      - main screen's startPlaying will just do energy stuff
      - b2b startPlaying will just return true (access to b2b runs will be controlled by
        availability of the B button)
      - run startPlaying will tell state to increase the played counter for the current state type
    - [x] extract run type type from prepareRun
    - [x] move away from using IDs for playstats, use a class and nesting inside its section by ID
    - [x] in sections.init(), set one as active, so we can drop all the "inactive" from html
    - [x] add a screenshot for the very first start, with a forced render, to be compared with
          back-to-basics
  - [.] phase 2:
    - [x] hide main wallet gradually, not abruptly
    - [x] polish the transition to this section: blank the whole screen (to black? to what color?),
          prepare the special run, unblank so it looks like we're switching to a completely new
          screen
    - [x] add a custom message instead of the default level 1 message
    - [x] add a heading where the wallet would be? like on settings screen
    - [x] also think of a better symbol for the button than B
      - B2B?
      - gate with gem above it?
      - ended with a lotus for calmness
  - [.] phase 3:
    - [x] make sure end-of-run screen can only take us back to main, not next level
    - [x] hide run info in backToBasics somehow
    - [x] keep track of how many times we've played this, and how many times we've finished
          (state.increasePlayed() and something)
    - [x] also use a different prng seed every time you succeed, but 1 should be the same as normal
          1
    - [ ] add a gem award where the gem is part of the final gate (floating above it)
  - phase 4: make this available every now and then, playable once
    - state.sideGames.backToBasics.lastPlayed?
    - feature allowed from level 100? (later as a skill?)
- [ ] add a test that card upgrades are applied in a normal run (e.g. player pData.range)
- [ ] side game: "Chase": a big diamond or something that flies away from us on a path through the
      run (clear of trees) and we're chasing and shooting and getting diamonds, up to a limit; every
      diamond received makes it a bit harder; every diamond not received makes it a bit less easier
  - skills can make you better at it; or separate cards? 
  - the big thing starts at bullet distance but only slowly accelerates to our speed so at full
    speed it's not too far from us
- [ ] put cards and other section buttons under upgrade buttons so it feels safer to swipe from the
      bottom to get the home button when you don't want to buy an upgrade
- [ ] change licence to GNU AGPL?
- [ ] the threshold for money-only daily could be your maximum haul or your cheapest upgrade or your
      robots upgrade as that's the most expensive
- [ ] alternative mine
  - marvin starts in front of all blocks (smaller blocks, 5 or 6 per width)
  - can move up, down, left, right, always by a whole space
    - cannot move down from row 1
    - indicate direction from gesture, allow user to cancel, move on release
  - map moves when we are on row 4 and move up,
    - blocks that were in row 1 shrink without giving awards
    - or there's a gate behind use that goes with us and we can't cross it or shoot through it
    - can Marvin speed up and slow down as the walking animation fades in or out?
    - map may move linearly but marvin lags behind a bit when starting to walk
  - has a number of shots, refreshed often
  - marvin shoots when cannot move because of a block
  - can find gems or coins for a start
    - later one or two new gem types for skills
  - can find bombs or drills to be used next
    - bomb with normal radius
    - drill does or 6 in front
  - when out of shots, sit down?
  - IMPLEMENTATION STEPS
    - [ ] make a button on the right that takes us there
    - [ ] fade everything out to black, rebuild scene, fade in with new UI
      - is it a section or something like run?
      - exit button takes us back
      - run wallet ready for things to get
    - [ ] position camera so we can see far ahead
    - [ ] put in a grid of blocks, some of them with gems, some of them harder (two shots), some
          empty spaces
      - one empty space in row 1 where Marvin is
    - [ ] first allow moving through blocks, do moving mechanics
    - [ ] then replace moves with shots when cannot move into a block
    - [ ] add bombs and drills - selector buttons on the side? after use, the buttons go back to
          shots?
    - [ ] make graphics for bomb (big explosion) and drill (multiple bullets?)
    - [ ] only allow drills when going forward? or let the user waste them?
- [ ] when showing cards screen, space the cards horizontally so that if cards don't all fit, the
      lower cards reach the bottom of the screen at between 20% and 80% of their height
  - or show some kind of shadow on the scrolling side, like in
    https://developer.chrome.com/blog/css-scroll-state-queries
- [ ] next I probably want quests or some side-games
- [ ] do different seasons (every 10 levels?)
  - got summer
  - autumn: colorful crowns on broadleafs, path with more black
  - winter: dead broadleafs, white-green-ish conifers, path white and grey, occasional dark?
  - spring: lighter-colored conifers, pink and cream broadleaves, normal path?
  - there could be butterflies or birds flying around
  - day and night?
    - with glowing things!!!
    - with street lamps!!!
      - but it might be expensive FPS-wise, with shadows; maybe it could work with short lamp
        fall-off
  - inside a tunnel?
- [ ] every level could have a different colour of end gate
- [ ] more cards see in `src/cards/types.ts`
  - [x] card tweaks: revisit progression of incoming new cards: money cards earlier, space
        range/rate/damage cards so new ones come on a similar staggered schedule?
  - [ ] any new improvable stuff from dim should go into initial state
  - [ ] cards - we should have so many of each rarity level that on average you'll finish all at the
        same time, 96 common per 1 legendary - check and handle any imbalances, probably mostly
        ignore differing starting times? or make all rarities start at the same time?
- [ ] (Maya? ai?) add card pictures
- [ ] tracks
  - intermission levels? (like starting, just to take a breath, no cards, no gold, all end-blocks
    and trees 1hp)
  - using level (per type of run?)
  - waves? reset gates? multi-stage runs?
  - ideas:
    - a few scattered end blocks in the middle of first few levels, which can be killed but also can
      be walked around
    - many little obstacles, try to get through and gather awards (like dungeon)
    - boxy blocks and everything on a grid, like a mine?
      - with a constrained firing rate starting just at one block shot down per block's distance
        walked
      - so at first we kinda have to choose a straight line and can only change when there's a gap
      - upgrades: every now and then throw a bomb or a drill upgrade in front of you?
        - they might fire immediately or after a second so you can choose where they go
      - could have 3 goes at the same level, so we have a path cut already but also treasures taken
    - kinda normal with multiplication and strength upgrades and boxes in the end (like normal
      timeline)
    - kinda normal with small strength upgrades and plenty enemies to mow down (and maybe an end
      boss) with an award only at the end (like "battle" for jewels)
    - slow-down with big bosses (slowing at the end of my minimum range?)
    - enemies that shoot back?
    - Levels where you have to collect all keys to pass through end gate
    - zones where players don't reposition themselves if there are gaps (e.g. so they fit through)
    - challenge modes, or quests (appear extra or in quests):
      - gather all (or a given number of) treasure without any upgrades (basic one player)
        - could be:
          - find all treasure in forest or maze
          - hit your choice of gems with every bullet you have (multiple hits necessary)
          - simply don't waste a bullet
          - shoot moving gems with enough bullets (like round-robin five levels with 3-4-5-6-7
            gems?)
        - can play with upgrades but only to try it, making the prize a bit lower
        - allows the player to pass or the quest times out and moves to the next one - in case it's
          randomly too hard
        - endless, starting from current level difficulty and slowly getting harder?
          - maybe from forest, through savanna, to desert with occasional dead trees and smaller
            boulders, and back?
          - track tiles could get replaced rather than moved, with start and end zone (earthy,
            grassy, rocky, sandy) where the bricks smoothly change color probabilities so it starts
            one color set and ends another
          - enemies could be animals of some sort?
        - a run that starts at a level of difficulty exactly matching your strength except fire rate
          - trees spaced by fire rate
          - so at first you can kill every tree
          - then it gets gradually more difficult, end objects 4 or 5 times harder?
          - ends after two runs worth of distance?
          - player group flipped back to front for fun?
          - only reward at the end if any Marvin reaches the end gate
          - randomized per how many of these we have run
      - finishing with matching colour Marvins could be a quest
      - finish N levels without a certain type of card - when you accept the quest, you lose those
        cards until the quest is done or forfeited
    - some level types can restrict types of available upgrades, e.g. mine should not permit more
      players
  - gradation
    - various types of runs should only get stronger if I pass them? at different rates?
    - [ ] special types should be behing special buttons?
    - lower probability of a run type if I lose in it?
  - daily tickets for special wave types?
  - [ ] state should have a current seed for track generation?
- [.] currencies analysis
  - coins: normal upgrades in a run
    - every now and then, these could be reset to 0, just in case it's too easy to collect them?
    - we don't have the end of a timeline (after several eras)
  - gems: cards with permanent upgrades
  - what do we get for quests?
    - points towards levels? different points per quest?
    - what do we get for levels? extra energy, gems, some other special currency…?
  - what do we get in a mine? some other special currency…?
    - in Timeline Up, it's coal and iron, for delayed general upgrades, could do something similar?
    - could be points for learning skills
  - some other special currency: buy robot upgrades, e.g. military ranks
    - show epaulets on the marvins - one, two, three lines, one, two disks, a star; each in blue,
      white, then gold?
      - if the epaulets are angled on the shoulders, they could reflect light nicely as the robots
        turn in stride
      - star could rotate
    - these could be buyable as many times as I can add new robots, each gives me one upgraded robot
    - I could choose to buy the second sergeant sooner, or the only corporal for more money if I
      don't often upgrade to more robots
    - officer ranks could have a limit where the lowest rank must be X levels below or else you
      can't buy the next officer rank
      - if you get an upgrade where you have a new robot, you'd then have to get all the lower ranks
        for that robot before you can upgrade the best officer
    - if your robot dies, you lose one of that rank and get a fresh new robot
  - some other special currency: skills that take time to train
- [ ] use quotes from Marvin, or plays on his quotes like
  - a card or a skill that "finally replaces all the aching diodes down his left side" that he asked
    for to be replaced
    - …and the new ones feel itchy instead
- [ ] achievements
  - gather 100 coins
  - get max on an upgrade
  - get max on all upgrades
  - get max on a card
  - clear out a level
  - finish tutorial levels (3) (unlocks first upgrade - fire rate?, and unlocks achievements
    showing)
  - [ ] list of achievements, showing progress?
    - achievements should at some point be sorted by ETA, not by fraction of achievement, so that
      long-taking achievements that are 2/3 done aren't hogging top ranks
- [ ] in-run upgrades, e.g. gates? fire rate, damage, extra players?
  - as gates? (move gate creation and then killing to run/object/object.ts so run/objects.ts doesn't
    call createGate directly?)
  - when we hit a gate it can slide into the ground
  - bonus & malus on player count and strengths, variable shoot-to-increase?, end/reset gates?
  - other in-run upgrades:
    - a gun upgrade for only a limited number of my creatures - e.g. upgrades 1, 2 or 3 of them
      only, for that run only
  - [ ] gates that only change Marvin's colour, quests like break 20 end blocks with red robot
    - the gates could be random per play because they have little effect on the level outcome
- [ ] skills (it should take time to "learn" skills? should need a special currency? from quests?)
  - make starting end blocks easier
  - double shot chance, triple shot chance, critical shot chance (using Math.random during the run)
    - this could be only for the battle against the boss, for example
  - buying in bulk
    - 9 cards at once (not implemneted)
    - then cheaper for 42 gems if one is for 5
    - then maybe cheaper still?
  - "finding treasure" - more gems per level? - nah, leave this as cards…
  - "always finding treasure" - guaranteed gems per run (which could then go to 0 initially)
    - 'Sapphire Meteor'
  - reminiscing (available from level 100?) - enables backToBasics
  - standing in a different formation - skills that you can switch between after a day's training
    - current blob, front-loaded triangle, point-first triangle
    - when you've tried all of them, you can get a switcher? or something more special? maybe the
      below
  - shooting patterns - like above, skills that you can switch between after a day's training
    - current staggered
    - shoot in exact waves
    - shoot all at the same time (so waves based on Z position)
    - when we've tried both, get "shoot to the same length of front row" as a special skill - makes
      those in the back shoot farther
    - then focus shooting - all bullets converge at the limit
  - miniaturization - smaller marvins (packed closer together), cheaper, more available, and only a
    bit weaker so it's a net positive
  - extra damage against specific objects/opponents?
  - small chance of surviving hitting a tree
  - extra damage in certain special types of runs?
  - extra damage by marvins of a certain colour?
  - critical damage by marvins of a certain colour against blocks of that colour?
  - always start with a marvin of a given colour?
    - this could be re-learned to a different colour
  - always start fire rate or damage on level 2, 3 etc.?
  - increase max level of cards? (the user would really only choose this when they have a lot of
    cards at top level)
  - award for finishing a run with a marvin matching the color of the end gate
  - "write a self-improvement book" - increase card max level for common cards
  - skills could get rusty over time, requiring retraining or you lose them
    - if we have too much currency for training, we can allow paying overtime and training faster or
      two at a time
    - but skills learned in overtime are weaker, they get rusty quicker
- [ ] I can calculate how long it would take someone to reach high levels depending on supply of
      gems 
- [ ] update README and index to say it's a game now? make it public?
- [ ] any other randomness in runs in the same level? what should be random?
  - maybe amount of coins in bags?
  - which end blocks have what rewards?
  - cards use Math.random()
- [ ] remove code that deals with sprites? or replace remaining emoji with my svgs?
  - it seems to be used for explosions and flying coins only now so much of it can go
- [ ] reposition players when one dies, if gaps appear in a row? or in front of them?
  - so that players smoothly move into their position
- [ ] random:
  - [ ] for randomness during a run, do we want predictable but independent prngs?
    - awards spawning placement when flying from track to wallet
    - maybe rotation of a dead tree?
    - impl: each of those could create a seed by appending a suffix to the original seed for the run
- [ ] should camera reposition itself on main screen and in run? probably yes, extra clear when just
      starting, the player is too high on the screen without buttons, but also too high during the
      game
  - if camera ever moves, we may need to change fog, too, and camera far limit
- [ ] add multi-stage objects (like a pile of jewels)?
  - [ ] use jewels for treasure? maybe if you shoot the biggest you get one jewel and it becomes a
        smaller one? or a pile?
  - well, a pile could just be a bunch of jewels closely behind each other
- [ ] when items are gained (like a better gun), make it fly towards player?
- [ ] add objects that shoot at us?
- [ ] add objects/gates that move left/right?
  - e.g. an animal that runs across the forest, with bonus when killed
- [ ] add objects that, when close enough, start actively moving towards you?
  - this needs to carefully handle the Z sorting of objectsGroup
- [ ] quests?
  - with timeout - daily, weekly?, monthly
  - add a give-up possibility to remove clutter, or re-roll?
  - quest re-roll buttons could only work once a day, and use a gem or cost some other price?
  - quest types:
    - break 20 end blocks
    - break 20 end blocks with red/green/blue robot
  - finish with exactly 1 red robot 3 times (needs colour gates) 
  - finish with exactly 1 red and 1 blue robot
  - best your income record of N - with reward scaled to how much bested 
- technical ideas
  - [ ] use LoadManager from https://threejs.org/manual/#en/textures for progress bars?
  - [ ] error handling - unhandled exceptions and promises
- [ ] add slow-down areas so we can have big bosses
  - [ ] first add possibility of markings on the track?
  - when in a slow-down area, objects are updated by a different delta
  - [ ] slow-down/speed-up should be gradual
  - [ ] should the camera reposition itself a bit?
    - should camera just be positioned according to speed? or should it be a part of the area?
  - [ ] should players get closer together so they all hit the boss?
- [ ] add particles showing damage?
- [ ] should some upgrades expire? should they be more/less expensive after expiry?
- [ ] add specific bigger occasional awards like the key in ice? what did it actually do? I think
      hero upgrades
  - it would randomly show up per run, it could be a skill or a card that increases the probability
    of this happening
  - the ice block could be clearly visible in the distance
  - it could be a card in the ice block
- [ ] let the world know about the game
  - reddit three.js? reddit games?
  - when all artwork is mine
  - when there are some upgrades
  - when there are at least two different types of runs
- [ ] in state have a version so if we upgrade, we can save it and the user can play an older
      version (no longer updated) - important from v2
- [ ] make it an installable app with icons etc.
  - https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html
- [ ] check if LatheGeometry makes two triangles even if the point is on the axis, fix it
- [ ] add objects beside the road in the fog?
- [ ] can we add some kind rolling landscape on the sides of the road? With lambert shading,
      low-poly random waves could work; tiles would need to share vertex coordinates and normals
      though
  - normals straight up by the road; towards or away from the road on the sides, but also
    forwards/backwards as if the tile was a valley or a hill
    - maybe the surface could actually be flat?
- [ ] Could a Marvin that took a hit flash a bit somehow?
- [ ] could Marvins sit down when out of energy?
- [ ] allow use of back button for navigation at least through sections, and from a run?
- [ ] remove circular dependencies
- [ ] add support for wider screens, landscape mode?
  - [ ] Use vmin instead of vh?
- [ ] make it work in Safari?
- `~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
- ideas for later
  - [ ] in cards screen, the incoming card could flip in 3d as it comes in
    - it can be a card and a card back in a single 3d-rotated package

---

## done by 2026-07-19

- [x] Update energy view after taking one point
- [x] Remove min width on run wallet
- [x] card highlight on progress could flash the green part, not a yellow dot

## done by 2026-07-15

- [x] (with Jules) the sectionButtons container should be renamed to 'leftSectionButtons', and then
      please add a 'rightSectionButtons' container that will mirror the positioning of the other
      one; for now just put a dummy button there with the letter B as its content
- [x] (with Jules) in the daily gift tests, click mouse in the middle of the screen, don't just
      click the right element

## done by 2026-07-14

- [x] when coming back to the game on the phone, it shows the main screen but without the canvas, it
      should show the splash screen instead
- [x] consolidate main screen wallet and end run wallet, make main screen wallet do both roles so it
      doesn't dim a bit after end run screen
  - we had these inconsistencies:
  - end screen wallet not hidden when we aren't getting coins yet
  - not showing 0 gems in end screen wallet when they are shown in main screen wallet

## done by 2026-07-12

- [x] let AI suggest a playwright test for main screen and another for a run
  - Jules is on it
  - cleaned up afterwards, works nicely

## done by 2026-07-09

- [x] settings exit button should be where the normal exit button is
  - [x] on cards, the exit button should also be there
  - [x] all exit buttons should be `X` ?

## done by 2026-07-06

- [x] (with Jules AI) refactor run screen and maybe end-run screen as sections, then it won't be
      possible to tab to an invisible button from end screen OK

## done by 2026-07-05

- [x] in wallets, count down when buying
  - [x] change from animation frames to 50ms timer for smaller fps
  - [x] then on daily award, count up on dismiss

## done by 2026-07-04

- [x] re-create sprite textures on return to fullscreen? (it seems they disappear)
- [x] add automatic import ordering?
- [/] use SpriteMixer? https://github.com/felixmariotto/three-SpriteMixer/
  - probably can be done with AnimationMixer and discrete tracks?
- [x] (with AI copilot) add a settings screen
  - don't show settings in first level
  - "reset"
  - ~~"go back to previous level"~~
  - "reset back to a certain stage" that you've already achieved:
    - after tutorials
    - when you get gems?
  - "show tutorials again"
  - after second level, show the new settings button to the user
  - in state, there could be a "tutorials seen" array, and an "enabled" function (instead of
    isUpgradeAllowed?)
  - show state as JSON

## done by 2026-07-03

- [x] (AI Jules helped find the place quickly) after gems are available, always show gem count in
      main screen wallet
- [x] (AI: Jules) stop animations in hidden things like the daily gift and cards
- retiring notes already handled:
- [/] center level and played on screen?
- [/] make final gate taller than the blocks, or the blocks shorter?
  - with height 30, the explosions aren't showing right

## done by 2026-06-30

- [x] (with AI: Copilot) I can make cards disappear in the needed direction, just put the right
      coordinates into CSS variable in style attribute on the element when we click it - we can
      match the target card by card type in a dataset prop
  - [x] a level-highlighted card should be highlighted in large as well (but not
        progress-highlighted cards)

## done by 2026-06-28

- [x] add in-run level and upgrade indicator at the top

## done by 2026-06-27

- show only 'spin' at first for daily gift, then change it to 'spin again' during the spin

## done by 2026-06-26

- fix not giving daily gift on the first day
- fix assertion logs coming up on no money in end blocks
- redo button and wallet color scheme
- add a daily gift heading with daily gift

## done by 2026-06-18

- [x] make sure the end blocks money distribution algorithm can handle more than 36 coins

## done by 2026-06-17

- [x] check that I don't get a daily gift on the first day of playing

## done by 2026-06-16

- [x] this doesn't reinitialise in the file-global object: initSpriteMaterials

## done by 2026-06-15

- [x] increase tracking speed in touch handler

## done by 2026-06-07

- [x] bug: warmup seems to cause scene not to be right anymore
- [x] when taking energy from full, update last given energy so new comes is given in an hour
- [x] redraw coin award material on start/resume
- [x] make blocks closer together, and lower, bulged at bullet height
- [x] see if Marvins could be closer back to front
  - they are already as closely packed as they can be - even without z-position jitter in the ranks,
    there's a wee little bit of clipping of the right arm into marvin in front

## done by 2026-06-05

- make player bullets better-spaced so they don't arrive at a wall together

## done by 2026-06-04

- make marvins a bit closer still

## done by 2026-06-02

- [x] on start let player die because that often causes lag
- [x] make sure there's a bag of money among the first two or three trees?
  - actually, if the player has very little money (under 20), pick money in daily gift
- [x] stop animation loop when not in fullscreen (or just not actually animate anything)
- [/] try outlined text (light text, dark sharp shadow, maybe bold)
  - not easy in CSS, would need an extra thick rounded font

## done by 2026-06-01

- [x] give highlighted card a light outline
- [x] the highlight on cards should appear slowly with the appearing showing card

## done by 2026-05-31

- more cards
- new level messages, after feedback from M
- various tweaks
- [x] new card level/progress highlight could pulsate

## done by 2026-05-30

- [x] add stricter eslint rules, commented out in eslint.config.mjs
- [x] card name needs a bit of padding
- [x] add energy countdown and automatic refresh, maybe as part of "touch to start"

## done by 2026-05-29

- [x] make daily prizes more generous
- [x] more cards

## done by 2026-05-28

- [x] resume on end screen doesn't work
- [x] If an end block has a gem, it loses coins, but should it?
- [x] Replay button, and ok, could both be just play again

## done by 2026-05-27

- [.] better cards UI
  - [x] add card descriptions (on buy/click, not under a question mark)
  - [x] animation when buying cards
- [/] created players could be spread out evenly in stride stage, so two are 1/3 apart and no two go
  the same
  - given N players, we should use stride phases from 0 to almost half but alternate over which half
  - i from 0 to N-1, strideStage += stride/2 + stride\*i/N
  - decided not to, the effect wouldn't necessarily be visible
- [x] add current date and time to version info
- [x] the guaranteed gem shouldn't be a set one: if I go through a run and get one of two diamonds,
      the next run shouldn't show me just two diamonds because the one I got was the guaranteed one
  - should it always be the last one in the run?

## done by 2026-05-26

- [x] daily gift should show up after a bit of a delay, not be there when I press start on splash
      screen

## done by 2026-05-25

- [x] we don't parse previousLevel on state load - drop it anyway, progress only on button press
- [x] add cards currency in most wallets, add paying for cards with cards
- [x] daily gift? (use a spinning wheel with a conic gradient)
  - some coins, a card or three, energy or two, any other currencies, extra ticket for special
    plays, extra roll (ensured only once)
  - [x] highlight the prize when we stop spinning

## done by 2026-05-24

- [x] rethink position of players, the current triangle isn't very good

## done by 2026-05-23

- [x] bug: where an award comes after dying (because a bullet was still flying and hits the target
      after we're dead), it counts but doesn't show up on the end screen
- [x] style by rarity (e.g. stars for increasing rarities), but also include it in the description
- [x] style type strip by type, at least background color
- [x] rarity has to work differently, if we have more common cards than rare available, rare become
      more common
- [x] (ai) sort cards in order received or in descending order or rarity then order received or
      level?
  - then level
- [x] 2-stage localStorage key change to just `rwns-*` and not jacekkopecky or shoot-em
- give more gems
- more cards - damage and energy
  - more names for energy: lightning bolt, _adjective_ flash

## done by 2026-05-21

- [x] when leaving full screen, pressing start on splash screen should go back to main screen;
      unless it's paused and then the splash screen should say we're paused and the button is
      "resume"
- always show wallet after coins are available
- [x] end boxes still have a shadow artifact - are they too low so their floor doesn't cast the
      shadow?
  - in the end it's solved with an extra plane inside the boulder that casts the extra shadow
- [x] show full wallet at the top of end screen?
  - Change "collected" to "collected this time"? (no, no need)

## done by 2026-05-18

- [x] make end blocks give rewards? (only when you get that card)
  - an end block with a jewel could have that jewel encrusted inside, random-rotated in x&z?
- [x] add first permanent upgrades
  - [x] add cards button that moves us to the cards section
    - card button next to the track, just above upgrades
  - [x] style cards section so it's a transition to the left?
  - [x] cards section
    - [x] big part to show your cards, scrollable
    - [x] close button
    - [x] show existing cards
    - [x] buy one card button
    - [x] buy 9 or 12 cards button (price of 8 or 10?) (actual buying not done)
  - [x] show available gems
  - [x] State:
    - [x] type, name and picture, also ID like type+number in case we have to rename a card
    - [x] cards can have minimum level from which they become available; isFeatureAllowed could use
          a pre-computed min level from those for gems
    - [x] cards:{[id]: {level, cardsTowardsNext}}
      - or cards:Wallet<CardType> - {[type]:number}
  - [x] Card mechanics: first one works alone, 1,2,2,3,3,3,4,4,4,4,5x5 etc
  - [x] Probabilities: select what rarity level of card we get (common, rare etc.) then random pick
        from those? 
    - [/] We could have counters since last of a rarity level so e.g. a rare comes at least every N
      cards? (nah)

## done by 2026-05-11

- [x] check Marvin's shadow, maybe switch hands?
- [x] put in-run wallet at the top, aligned with the exit button
- [x] maybe fix a shadow artifact of blocks passing just to the right under the camera
- [x] add non-zero min width on hit bars
- [x] introduce gems so we can start buying permanent upgrades
  - some hidden among the trees
  - some embedded in the blocks
    - useForAward could have a string, then getByName() would be used to get the one to use
  - gems could be collected once per level, but with stable generation so those not collected stay
    where they were
    - should there be a gap or a tree where we collected a gem, if the gem originally replaced a
      tree? let's make it a tree
    - needs to show how many are left
    - this gives both a bit of a reward for repeating, but also a reason to progress when all are
      collected
  - [x] replace some trees with gems, except where already collected
  - [x] clear collected gems on next level
  - [x] add gems to some blocks, make them collect correctly by reusing the 3d object and adding
        them to collected
  - [x] show number of collected gems on end screen
  - [x] show number of total gems on end screen
  - [x] don't show number of gems on end screen if there weren't any

## done by 2026-05-09

- [x] end screen: ~~show level just finished~~, change buttons
  - replay alone should be OK
  - replay/ok should be just stay/progress? replay/next level
- [x] Update main screen on page becoming visible, fullscreen change
- [x] Touch to start should say out of energy - that could also be the energy indicator
  - [x] Touch without energy should just update energy display

## done by 2026-05-08

- [x] add daily energy, disabled in dev build
  - only enable after the first few levels

## done by 2026-05-04

- [x] try to get objects not to overlap too much, like trees that are too close
- [x] level 4+ increasing difficulty until it's impossible
- [x] make buttons react visibly to clicks
- [x] bug: marvin doesn't receive shadow

## done by 2026-05-03

- [x] rename to RWNS (Robot Walkin'n'Shootin)
- [x] get notes into here from google keep
  - [x] Why are gems losing hp when I walk over them?
- [.] tracks
  - much longer than now
  - [x] we'll want some kind of dim.runLength, or a different one per run type
    - maybe choose a random or round-robin-ish level _type_ (e.g. forest, maze/mine, battle, tower)
      which dictates a number of sections of different type which then add up to a length?
  1. just trees, one hit point each
     - first level without end blocks?
     - custom message: don't run into trees
  2. longer, trees and 10 bags with up to 3 coins (avg 2)
     - custom message: find and collect coins
  3. same as above with end blocks
     - custom message: some things take more than one bullet
     - [x] custom message with balanced text wrapping
     - [x] hide in-run wallet until there's something in it
     - [x] hide main wallet until there's something in it
  - [x] where there are rewards, make sure they are relatively evenly spaced in Z, and that some are
        near the ends so we don't end up with a long ending without rewards

## done by 2026-04-30

- [x] add a "retry" button on end of level, rename "ok" to "next"
  - retry decreases level again if it was increased by a win
  - it has to be increased immediately on win because otherwise a reload on the "well done" screen
    would lose that progress

## done by 2026-04-29

- [x] add objects with a visible damage countdown (hit bar / health bar)
- [x] place explosion in front of the object that was hit, because some bullets hit the end gate too
      late and the explosion is missing

## done by 2026-04-27

- [x] add end blocks so ending a level isn't so easy, but at first doable with full upgrades
  - [x] either octahedrons, or some kind of boulders

## done by 2026-04-24

- [x] only reset upgrades from main screen when a run is successfully finished?
  - so they should be called currentLevelUpgrade rather than nextRunUpgrade?
  - they should be much more expensive so you can only max out after a number of tries
  - [x] which upgrades are allowed should be in state, computed from level or other props (quests,
        achievements etc.)
- [x] change explosion so it's a flat SVG standing upright, not a sprite,
  - [x] then make gate extent max y 0.01 or somesuch, not 2?

## done by 2026-04-23

- [x] bug: reset all data doesn't recreate the track?

## done by 2026-04-22

- with the help of AI
  - [x] todo add 'mousemove' like touchmove in touch handler?

## done by 2026-04-19

- [x] some kind of run ending, and distinguishing between finishing and dying
- [x] add 3d models
  - [x] make 2d picture for money instead of the money emoji
  - [x] money bag

## done by 2026-04-16

- [x] bullets tetrahedron
  - [x] rotating
  - [x] BUG: why do hitPoints on objects sometimes become NaN?
    - it was because I changed the bulletsGroup.children while iterating over it
    - fix: iterate over an array copy

## done by 2026-04-13

- [x] give it a service worker so it's cached

## done by 2026-04-12

- [x] diamond?
  - [x] rotate
  - [x] shrink into the middle when no award
  - [x] make the award fly from the right place, use the model itself?
  - [x] make a picture of it for use elsewhere?
  - diamonds are now too low and the bullets hit strangely
- [x] refactor walk animations to be updated by animations.ts?

## done by 2026-04-10

- [/] refactor touch handler so that remembering last is done outside, in players, with dynamic
  bounds
  - [x] instead change touch handler to relative
- [x] add 3d models
  - [x] coniferous tree
  - [x] broad-leaf tree
  - [x] dying conifer
  - [x] dying broad-leaf
  - [x] player
    - [x] fix left-right mismatch with legs
    - [x] make bobgroup bob, torso and gun turn
  - [x] track
  - [x] add shadows
- [x] add possibility of multiple players in group
  - [x] stagger shooting for player groups? or shoot in waves?
  - [/] as transient upgrade? as permanent upgrade?

## done by 2026-04-04

- [x] move camera with player movement

## done before 2026-04-03

- [x] make marvin walk during game,
  - [x] test that the leg speed is correct
- [x] add a brick pattern on the road
- [x] check extent scaling to 0.8 is still appropriate
- [x] set camera.far so we don't see stuff in fog
- [x] show how many played games

## done by 2026-03-23

- [x] hide or disable exit button when finishing

## done by 2026-03-22

- [x] refactor object dying so types and players/bullets/objects need not depend on sprites
  - [x] move animations into three/
  - [x] move models into three/
- [x] refactor types and common files to simplify imports

## done by 2026-03-21

- [x] refactor collisions:
  - every object is either cylindrical or axis-aligned boxy; everything is really 2D
  - players and bullets check overlap with objects
  - players are cylindrical, bullets boxy (Box2, extend to include computations with circles?)
  - objects can be cylindrical or boxy, too
  - [x] every object has a bounds - extent2d - a Box2 or a Circle, and maybe minz/maxz?
    - [x] make a class for Circle with .isCircle (TS doesn't know that Box2 has .isBox2)
    - [x] make a function that checks collisions, with all four options
      - this function MUST TAKE INTO CONSIDERATION the x/z movement of the object's group
  - [x] when adding objects, sort them by maxZ before adding to their group
    - this needs to support the following:
      - is the object far enough so it's behind camera? (so we stop removing further objects)
        - this is inaccurate but that's OK, a smaller object can be removed later
      - is the object close enough to be shot? (stop considering further objects)
      - is the object close enough to touch a player? (stop considering further objects)
    - it's possible because we're adding objects in waves that don't overlap
  - [x] change collision logic to use the function above, and various minz/maxz
- [x] refactor types: move various types to files in ./types/, or rethink where types live anyway

## done by 2026-03-18

- various refactoring and modeling a coniferous tree
- [x] does sprite scale x -1 flip the image?

## done by 2026-03-15

- [x] add transient upgrades somehow
  - for next run only
  - general: fire rate, damage
- [x] add main-screen elements:
  - [x] currencies
  - [x] upgrade buttons
  - [x] in updateMainScreen, update the screen from state - wallet, possible upgrades etc.
- [x] add localStorage state
- [x] have enemies that make sense:
  - we could have trees that are in the way and need shooting down
  - gems and coins around them

## done by 2026-03-14

- [x] when currency is gained, make it fly towards the wallet?
  - [x] show how much we have

## done by 2026-03-12

- [x] some kinds of income
- [x] add player collision
  - add playerThickness - actually just use half width
  - make bullets start that far in front of the player
  - add collision detection between player (with thickness) and objects, react accordingly
- [x] add road decorations so you can see the road moving
- [x] add bullets
  - [x] in their own group, starting from player (neg group Z) at fixed time intervals
    - move the group every animation update
    - [x] change bullet range to minGroupZ: every bullet has minZ (computed from range and initial
          position)
    - remove bullets that have reached their minZ
  - [x] finding hits
    - have both bullets and objects sorted in Z axis
    - bullets have lengths (going forwards to -Z) so bullet ends (nearer player) are sorted
    - for each bullet find first object that's at the bullet's Z or smaller, starting from last
      bullet's first object
    - using indexes, go through all ojects that are at the bullet's Z minus length or larger
    - the first that matches in X is hit, break to next bullet
      - on hit, kill objects, remove bullet
    - [x] make bullets have hit points
      - add health to objects, kill only when out of health

## done by 2026-03-11

- [x] check browser performance with a canvas? or use three.js?
  - three.js seems to be happy with a couple thousand objects
  - [x] rebuild what I have so far in three.js
    - [x] planar mesh for the track
    - [x] appropriate fog
    - [x] sprite for player
    - [x] sprites for objects, in a group that can be moved in animation
    - [x] make sure I have a good understanding of my coordinates
      - I'm not making the player yet right?
      - 0,0,0 could be starting point for player
      - camera could be looking towards 0,0,100 or somesuch?
      - x,0,y (y positive) could be starting point of things
    - [x] smileys
    - [x] moving the player
    - can do a few thousand objects smoothly
  - [x] make objects die when too close
    - [x] have an animation manager
  - [x] finish run when no enemies? on back button?
  - [/] use pushState when starting a run, popState when ending it,
  - [/] and the 'popstate' event to finish (but don't popState then)
    - cannot do the above because on android the back button stops fullscreen
  - [/] add a toast? (probably no because it would only be useful for the back button)

## done by 2026-03-10

- [x] try going fullscreen on the phone
- [x] try reacting to touch
- [x] disable user-select everywhere
- [x] split out splash-screen.ts and game-main.ts
- [x] split out log.ts
  - [ ] only log in dev mode somehow?
- [x] try using browser 3d
  - [x] draw a static game
  - [x] make a track element that will be shown tilted away
  - [x] make the camera 3d
  - [x] put an onclick on the track that switches touch on/off (add a toggle in touch handler)
  - [x] same onclick will make the track switch between tilted away and vertical but a bit further
        in Z axis
    - [x] it could always be that much further in Z axis anyway
  - [x] use emoji for everything?
  - [x] put things on the track, tilt them back towards me
  - [x] put a few haze elements at some distance
- [x] check browser 3d performance when the elements are moving towards us
  - with DOM 3d transforms and small-ish images, we can have about 120 objects for 60fps on my phone
    - type of object doesn't seem to matter: svg, bitmap 30px wide, text, emoji
    - this is with 80vh of 10 haze planes
  - same as above but moving the whole #objects element, 300 objects at 60fps
  - tried with transformY instead of transform - no diff
  - tried with animation - no diff
