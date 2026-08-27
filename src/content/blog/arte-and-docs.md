---
title: Docs is to software what Arte is to media — with three exceptions
date: 2026-08-27
description: Docs and Arte share a mechanism, not just a flag — and the gaps are the real story.
---
> It's hard not to think of ARTE. Seeing this same logic of shared construction extend to public digital services and open-source software is particularly interesting.

This comment under a [LinkedIn post about Docs](https://www.linkedin.com/posts/lamirkhanian_la-france-et-lallemagne-codent-ensemble-activity-7498605252179554306-52ue?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANbVecBqlRROhoEqmczj3djzZ-HgIF3738) made me realize I, a huge Arte fan, never made the parallel my self before. 

## Could Docs be to software what Arte has been to media? 

I've been turning that over for a few days, because it's a better analogy than a compliment. It points at something real, and it also breaks in three places worth naming, because those breaks are more interesting than the flattery.

First, for anyone outside France or Germany who hasn't run into it: Arte is a Franco-German public television channel built for culture, documentary and arthouse film, deliberately outside the ratings game commercial channels play. It exists because of a treaty, not a business plan. On October 2, 1990, France's culture minister Jack Lang and the minister-presidents of the eleven West German Länder signed an interstate agreement in Berlin establishing a joint European cultural channel. The operating structure — a Groupement Européen d'Intérêt Économique, a joint entity under both countries' law — was formed in Strasbourg on April 30, 1991. The channel went on air on May 30, 1992. It has run continuously since, headquartered jointly in Strasbourg and Baden-Baden ([Le Taurillon](https://www.taurillon.org/arte-genese-d-un-monument-culturel-franco-allemand)).

Arte marked something else too: it pushed European integration into territory it had never covered before. Everything the two countries had built together up to that point — coal and steel, the common market — was economic. Arte was the first time cultural production itself became a joint European project. Software Heritage, the archive that preserves source code as part of humanity's cultural and scientific record, makes essentially the same claim about what Docs produces: "Software in source code form is produced by humans and is understandable by them; as such it is an important part of our heritage that we should not lose" ([Software Heritage](https://www.softwareheritage.org/mission/heritage/)). If Arte moved European construction from economy into culture, a jointly built piece of software is the same move landing in a domain — code — that is culture too, whether procurement rules treat it that way or not.

Docs is a collaborative document editor, an open alternative to Google Docs and Notion, co-developed by France's DINUM and Germany's ZenDiS as part of La Suite numérique. MIT-licensed, built in the open on GitHub using Django and React and self-hostable. It's a much younger and much lighter piece of infrastructure than Arte. But the LinkedIn comment wasn't really pointing at the feature set. It was pointing at the mechanism underneath both: two states choosing to build one shared thing instead of each building, or each buying, its own.

## The mechanism that actually transfers

That's the part of the analogy that holds up under pressure. Arte's real innovation in 1990 wasn't "quality television" — it was the decision that neither France nor Germany would produce a national answer to the other's programming. They pooled the effort into a single jointly governed structure instead. Thirty-four years later, DINUM and ZenDiS made the same call about a document editor: rather than France shipping a sovereign Google Docs alternative and Germany shipping its own, they're building one codebase together. That's the pattern worth naming, and it's rarer than it should be in public-sector software, where duplicated national procurement is closer to the default.

## The same move, thirty-five years apart

Arte happened because two people decided it should. François Mitterrand and Helmut Kohl backed the project from 1988, two years ahead of the treaty that created it — a decision made by two heads of state, not a response to market demand.

The pattern repeated in the same city, thirty-five years later. On November 18, 2025, Emmanuel Macron and Friedrich Merz co-chaired a Summit on European Digital Sovereignty in Berlin, bringing together more than 900 policymakers, industry leaders and researchers from all 27 EU member states ([Élysée](https://www.elysee.fr/en/emmanuel-macron/2025/11/18/summit-on-european-digital-sovereignty-delivers-landmark-commitments-for-a-more-competitive-and-sovereign-europe)). Merz:

> "The summit marks an important milestone on the path towards a more sovereign, secure and competitive digital Europe [...] For Europe, digital sovereignty means the ability to shape technology across the entire value chain in line with European interests and needs. We seek competition on equal terms [...] As a community of States, we must align our legal frameworks, procurement and investment procedures accordingly."

Macron:

> "The Digital Sovereignty Summit sends a clear signal: Europe has what it takes to lead the digital age [...] This summit also symbolizes an historic convergence of our national champions in AI and digital technologies, proving that collaboration across borders is not just an aspiration but a strategic imperative. Private and public actors now need to accelerate together to develop and fully adopt European technologies."

Different decade, same shape: two heads of state deciding in public that pooling beats duplicating. Arte was that decision applied to a television channel — as far as I can tell, the first time two states built one together. Docs may be the same decision applied to software: possibly the first time two states have built a piece of software together, rather than each running its own procurement for the same thing.

## Where it stops holding

Three places where pushing the analogy further would be dishonest, and where the gap is actually the more useful thing to think about.

**The success metric points in opposite directions.** Arte treats low audience share as a feature, not a failure. It posted a 2.9% audience share in France in 2023 and 3% in 2024 — a historical record, reported as one ([La Télé Crève l'Écran](https://latelecrevelecran.over-blog.com/2024/12/2024-une-annee-exceptionnelle-pour-arte-avec-des-records-historiques-d-audience-sur-le-numerique-et-a-l-antenne.html)). Arte was never meant to out-rate TF1; being watched by a self-selecting minority is the model working as intended. Docs doesn't get that option. A document editor that a small dedicated minority loves while everyone else keeps using Google Docs isn't a quiet cultural success, it's a failed migration. Adoption isn't a nice-to-have metric for Docs the way audience share is beside the point for Arte — it's the entire test.

**The two projects are open in different senses.** Arte is free to watch — arte.tv, free-to-air broadcast, no subscription. But you can't fork an Arte documentary or redeploy its editorial line under an open license; the openness is access to a finished product. Docs is open in a different, more structural sense: MIT license, code you can read and redeploy, and a document format built on Yjs CRDTs, which have independent implementations across multiple languages, so a document isn't hostage to one company's parser. Arte's openness is "free to watch." Docs' openness is "impossible to lock in." Worth keeping those distinct, because a technical reader who hears "open like Arte" and expects free access, rather than format portability, will misread what Docs is actually promising an institution.

**The institutional weight isn't comparable yet.** Arte can point to an interstate treaty, a dedicated legal entity, and thirty-four years of continuous operation as evidence it will still exist next year. Docs launched in March 2025 as part of a broader government program. That's not a criticism — most things start somewhere — but an IT director deciding whether to bet a department's documents on Docs is really asking Arte's question: will this still be here in a decade, and under what structure. Right now the honest answer is that Docs has the right instinct (own your format, don't depend on one vendor) but not yet Arte's decades of proof that the joint structure itself survives changes of government on both sides.

## What's actually worth asking

If the mechanism — two states pooling effort into one shared institution instead of duplicating it nationally — is what makes Arte durable, the interesting question isn't whether Docs resembles Arte today. It's whether that mechanism generalizes past media into software infrastructure, and whether it needs treaty-level backing to actually last, or whether a program like La Suite numérique is a lighter-weight version of the same idea that can still hold.

I don't have a confident answer. If you know of other Franco-German or EU joint software efforts built on this pooling logic rather than each country running its own procurement, I'd like to hear about them — they're the closest thing to a track record we have for judging whether this works outside television. And if you want to look at the two founding artifacts side by side, the 1990 Arte treaty and the [`suitenumerique/docs`](https://github.com/suitenumerique/docs) repository are an odd but genuinely useful pair to read together.

Arte is thirty-four years old. Whatever else changes about this comparison, that number is the one I keep returning to: something two states built together, watched by a self-selected minority, still running three decades later. I'd like to be writing the same sentence about Docs in 2059.

