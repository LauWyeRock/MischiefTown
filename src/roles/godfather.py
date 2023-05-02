import mafia

class godfather(mafia):
    def __init__(self, name):
         super().__init__(name)
         self.role = "godfather"
         self.defense = 1
         self.attack = 1
    def kill(self, player):
            if self.is_alive and player.defense < self.attack and not isinstance(player, mafia):
                player.is_alive = False
                print(f"{player.name} is dead.")
            else:
                print("Your target's defense was too strong to kill.")
                
    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"
