
import csv
import re
import sqlalchemy
import subprocess

def extract_postgresql_url():
  ENV_COMMAND = '/usr/local/bin/scalingo --app pix-api env'
  stdout = subprocess.run(ENV_COMMAND.split(' '), stdout=subprocess.PIPE).stdout.decode()

  return stdout.split('\n')[-2]

def convert_postgesql_url_to_local_connection(postgres_url):
  postgres_url = re.sub('SCALINGO_POSTGRESQL_URL=', '', postgres_url)
  return re.sub('@.+/', '@localhost:10000/', postgres_url)

def anonymize(field, alias = None):
  if not alias:
    alias = field
  return 'encode(digest({}::text, \'sha256\'), \'hex\') as {}'.format(field, alias)

SELECT_ALL_ANSWERS = (""
  " SELECT {}, {}, {}, \"challengeId\", result, answers.\"elapsedTime\", assessments.\"createdAt\" as \"assessmentCreatedAt\", answers.\"createdAt\" as \"answerCreatedAt\""
  " FROM answers, assessments"
  " WHERE answers.\"assessmentId\" = assessments.id AND assessments.type = 'PLACEMENT';"
  ).format(
    anonymize('answers.id', '"answerId"'),
    anonymize('assessments.id', '"assessmentId"'),
    anonymize('assessments."userId"', '"userId"')
  )

postgres_url = extract_postgresql_url()
postgres_url = convert_postgesql_url_to_local_connection(postgres_url)
print("Connecting to {}...".format(postgres_url))
engine = sqlalchemy.create_engine(postgres_url)
connection = engine.connect()
print("... OK\n")
print(SELECT_ALL_ANSWERS)
result = connection.execute(SELECT_ALL_ANSWERS).fetchall()
print("... OK\n")

with open('anon_dump.csv', 'w') as csvfile:
  print("Wrinting output file...")
  writer = csv.writer(csvfile)
  writer.writerow([
    'answerId', 'assessmentId', 'userId', 'challengeId',
    'result', 'elapsedTime',
    'assessmentCreatedAt', 'answerCreatedAt'
  ])
  writer.writerows(result)
  print("... OK")

print('DONE !')
