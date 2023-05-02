import neutral

class jester(neutral):

    def __init__(self, name):
         super().__init__(name)
         self.role = "jester"

    def lynched(self):
        self.attack = 3

    def kill(self, player):
        if player.defense < self.attack:
            player.is_alive = False
    
    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"