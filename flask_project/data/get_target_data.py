import csv
import json
import requests

dpci_list = ['072-04-1870']

def get_products(item_ids):
    all_items = []
    for item_id in item_ids:
        r = requests.get('https://api.target.com/products/v3/{dpci}?id_type=dpci&store_id=634&fields=images&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF'.format(dpci=item_id))

        item = json.loads(r.content)['product_composite_response']['items'][0]
        all_items = {
            'description':item['general_description'],
            'url':item['data_page_link'],
            'image_link':item['image']['external_primary_image_url'][0]
        }

        print all_items
        return all_items

with open('items.csv', 'w') as f:
    fieldnames = ['description', 'url', 'image_link']
    writer = csv.DictWriter(f, fieldnames=fieldnames)

    writer.writeheader()
    for row in get_products(dpci_list):
        print row
        writer.writerow(row)
