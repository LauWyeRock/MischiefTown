import mafia

class consigliere(mafia):
    def __init__(self, name):
         super().__init__(name)
         self.role = "consigliere"
         
    def check(self, player):
        return player.role
    
    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"