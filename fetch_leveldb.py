import plyvel
import os
import json

def get_chrome_storage_path():
    home_dir = os.path.expanduser("~")
    # Assuming you're using Linux, set the path to the backup
    chrome_storage_path = os.path.join(home_dir, "leveldb_backup")
    return chrome_storage_path

def fetch_values_from_leveldb(path):
    try:
        db = plyvel.DB(path, compression=None)
    except Exception as e:
        print(f"Error opening LevelDB: {e}")
        return {}

    data = {}
    for key, value in db:
        try:
            decoded_key = key.decode('utf-8')
        except UnicodeDecodeError:
            decoded_key = key.hex()
        
        try:
            decoded_value = value.decode('utf-8')
            try:
                json_value = json.loads(decoded_value)
                data[decoded_key] = json_value
            except json.JSONDecodeError:
                data[decoded_key] = decoded_value
        except UnicodeDecodeError:
            data[decoded_key] = value.hex()

    db.close()
    return data

def main():
    path = get_chrome_storage_path()
    if os.path.exists(path):
        values = fetch_values_from_leveldb(path)
        for key, value in values.items():
            print(f"Key: {key}, Value: {value}")
    else:
        print(f"LevelDB path does not exist: {path}")

if __name__ == "__main__":
    main()