
import csv

with open('data.csv','r') as csvinput:
    with open('output.csv', 'w') as csvoutput:
        writer = csv.writer(csvoutput, lineterminator='\n')
        reader = csv.reader(csvinput)

        all = []
        row = next(reader)
        row.append('quadrant')
        all.append(row)


        for row in reader:

            if (row[10] == ''):
                row.append('')

            else:
                lat = float(row[10])
                lon = float(row[11])

                if (lat >= 34.0175 and lon < -118.3320):
                    row.append('0') #northwest
                if (lat >= 34.0175 and lon >= -118.3320):
                    row.append('1') #northeast
                if (lat < 34.0175 and lon < -118.3320):
                    row.append('2') #southwest
                if (lat < 34.0175 and lon >= -118.3320):
                    row.append('3') #southeast

            all.append(row)

        writer.writerows(all)
