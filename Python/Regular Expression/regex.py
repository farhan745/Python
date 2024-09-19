import re
pattern = r"was"
text ='''Initially only available in English, editions of Wikipedia in more than 300 other languages have been developed. The English Wikipedia, with its almost 6.9 million articles, is the largest of the editions, which together comprise more than 63 million articles and attract more than 1.5 billion unique device visits and 13 million edits per month (about 5 edits per second on average) as of April 2024.[W 1] In July 2024, over 25% of Wikipedia's traffic was from the United States, followed by Japan at 6.2%, the United Kingdom at 5.8%, Russia at 5.2%, Germany at 5%, and the remaining 51% split among other countries, according to Similarweb.[8]'''
match=re.search(pattern,text)
print(match)