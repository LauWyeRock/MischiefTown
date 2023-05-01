import town

class doctor(town):
    def __init__(self, name):
         super().__init__(name)
         self.role = "doctor"
    def heal(self, player):
        player.defense = 2

    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"