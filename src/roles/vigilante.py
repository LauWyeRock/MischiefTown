import town

class vigilante(town):
    def __init__(self, name):
        super().__init__(name)
        self.role = "vigilante"
        self.bullets = 3
        self.attack = 1
        self.guilt = False
        
    def shoot(self, player):
        if self.bullets >= 0 and player.defense < self.attack:
            player.is_alive = False
            self.bullets -= 1
            if isinstance(player, town):
                self.guilt = True

    def dies_of_guilt(self):
        if self.guilt:
            self.is_alive = False
            print(f"{self.name} died from guilt.")

    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"