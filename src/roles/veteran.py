import town

class veteran(town):
    def __init__(self, name):
        super().__init__(name)
        self.role = "veteran"
        self.alert = False
        self.num_alerts = 3
        self.attack = 2

    def on_alert(self):
        self.alert = True
        self.num_alerts -= 1
        self.defense = 1 

    def kill(self, player):
        if self.is_alive and player.defense < self.attack:
            player.is_alive = False

    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"