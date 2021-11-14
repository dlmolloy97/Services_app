import pandas as pd
df=pd.read_csv('src/data/response_time.csv')
df.head(n=5)
df.columns = ["y", "label"]
ajson=df.to_json(orient='records')
import json
with open('/Users/desmondmolloy/Desktop/Codecademy_bench/src/data/response_time.json', 'w') as outfile:
    json.dump(ajson, outfile)
myjsobject="export var newData={}".format(ajson)
dest_file='/Users/desmondmolloy/Desktop/Codecademy_bench/src/data/test.js'
text_file = open(dest_file, "wt")
n = text_file.write(myjsobject)
text_file.close()