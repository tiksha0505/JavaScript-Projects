# JavaScript Projects

This repository features four mini JavaScript projects, each designed to strengthen your understanding of DOM manipulation, event handling, and API integration.

Projects Included: 

1. Calling APIs – Learn how to fetch data from external APIs and display it dynamically on a webpage.

2. Generating Random Colours – Use Math.random() to generate random RGB colour values and update the UI interactively.

3. Simon Says Game – An interactive memory game built entirely using DOM manipulation.

4. Todo App – A functional todo application demonstrating dynamic element creation, event handling, and state management.

Each project contains its own README.md with detailed setup instructions and explanations.

These projects were specially developed to provide hands-on experience with core JavaScript concepts, helping build confidence in creating interactive web applications.



Algorithm: Basic Text Processing (Normalization & Tokenization)
Require: Raw Document D, Punctuation Removal Flag P
Ensure: Normalized Text D_norm, Sentence Tokens S, Word Tokens W

Phase 1: Text Normalization
1:  D_lower <- Lowercase(D)
2:  D_norm <- ReplaceMultipleWhitespaces(D_lower, " ")
3:  D_norm <- TrimWhitespace(D_norm)

Phase 2: Sentence Tokenization
4:  Initialize empty list S
5:  S_raw <- SplitTextByRegex(D, pattern = "(?<=[.!?])\s+")
6:  for each sentence sent in S_raw do
7:      sent_clean <- TrimWhitespace(sent)
8:      if sent_clean is not empty then
9:          Append sent_clean to S
10:     end if
11: end for

Phase 3: Word Tokenization
12: Initialize empty list W
13: if P is True then
14:     W <- MatchRegexAll(D_norm, pattern = "\b\w+\b")  {Extract alphanumeric words}
15: else
16:     W <- MatchRegexAll(D_norm, pattern = "\w+|[^\w\s]") {Extract words and punctuation}
17: end if
18: return D_norm, S, W
