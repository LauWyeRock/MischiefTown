import town

class mayor(town):
    def __init__(self, name):
         super().__init__(name)
         self.role = "mayor"
    def reveal(self):
        self.vote_count = 3
    
    def __str__(self):
        return f"Player: {self.name}, Role: {self.role}, Status: {'Alive' if self.is_alive else 'Dead'}"