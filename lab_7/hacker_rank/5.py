#Word Order

n = int(input())
cnt = {}
words = []

for i in range(n):
  word = input()
  words.append(word)
  if word in cnt:
    cnt[word] += 1
  else:
    cnt[word] = 1
    
print(len(cnt))
print(' '.join([str(cnt[word]) for word in cnt]))
