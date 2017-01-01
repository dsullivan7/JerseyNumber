"""Returns a sports star who played with the given number."""
import json
import os
import random

number_info = None
with open(os.path.join('sports_info', 'number_info.json')) as number_info_file:
    number_info = json.load(number_info_file)


def get_athlete(number=None):
    """Return an athlete who played with the given number."""
    if not number:
        return None

    # look this number up in our number information index
    if number in number_info:
        player_array = number_info[number]
        index = random.randint(0, len(player_array) - 1)
        return player_array[index]

    # no number was found, return a generic comment
    return number_info['unknown'][0]
