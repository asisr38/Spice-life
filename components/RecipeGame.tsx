'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heading, Text } from '@/components/ui/typography'
import { CheckCircle, Circle, Trophy, ChefHat, Star } from 'lucide-react'

interface Recipe {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  time: string
}

const recipes: Recipe[] = [
  {
    id: 1,
    name: "Samosa Chaat",
    difficulty: "Medium",
    time: "15 mins",
    ingredients: [
      "Crushed samosa",
      "Chana (chickpeas)",
      "Cucumber salad",
      "Mint chutney",
      "Tamarind chutney",
      "Plain yogurt",
      "Sev",
      "Chaat masala"
    ],
    instructions: [
      "Place crushed samosa on a plate",
      "Top with chana and cucumber salad",
      "Add mint and tamarind chutneys",
      "Drizzle plain yogurt",
      "Sprinkle sev generously",
      "Finish with a dash of chaat masala"
    ]
  },
  {
    id: 2,
    name: "Aloo Tikki Chaat",
    difficulty: "Medium",
    time: "20 mins",
    ingredients: [
      "Aloo tikki (potato patties)",
      "Chana (chickpeas)",
      "Cucumber salad",
      "Mint chutney",
      "Tamarind chutney",
      "Plain yogurt",
      "Sev",
      "Chaat masala"
    ],
    instructions: [
      "Place hot aloo tikki on a plate",
      "Top with chana and cucumber salad",
      "Add mint and tamarind chutneys",
      "Drizzle plain yogurt",
      "Sprinkle sev",
      "Add a pinch of chaat masala"
    ]
  },
  {
    id: 3,
    name: "Am Palak Chaat",
    difficulty: "Easy",
    time: "10 mins",
    ingredients: [
      "Raw mango (grated or chopped)",
      "Cucumber salad",
      "Mint chutney",
      "Tamarind chutney",
      "Plain yogurt",
      "Sev",
      "Chaat masala"
    ],
    instructions: [
      "Mix raw mango and cucumber salad",
      "Add mint and tamarind chutneys",
      "Drizzle plain yogurt",
      "Add sev",
      "Sprinkle chaat masala"
    ]
  },
  {
    id: 4,
    name: "Aloo Papdi Chaat",
    difficulty: "Medium",
    time: "18 mins",
    ingredients: [
      "Boiled chickpeas",
      "Cucumber salad",
      "Mint chutney",
      "Tamarind chutney",
      "Plain yogurt",
      "Sev",
      "Chaat masala",
      "Papdi (crispy crackers)"
    ],
    instructions: [
      "Arrange papdi on a plate",
      "Top with chickpeas and cucumber salad",
      "Drizzle mint and tamarind chutneys",
      "Add plain yogurt",
      "Sprinkle sev",
      "Finish with chaat masala"
    ]
  },
  {
    id: 5,
    name: "Bhel Puri",
    difficulty: "Easy",
    time: "12 mins",
    ingredients: [
      "Cucumber salad",
      "Mint chutney",
      "Tamarind chutney",
      "Sev",
      "Chaat masala",
      "Puffed rice (optional)"
    ],
    instructions: [
      "Mix cucumber salad with mint and tamarind chutneys",
      "Add sev",
      "Sprinkle chaat masala",
      "Optionally, add puffed rice for authentic bhel puri"
    ]
  }
]

export default function RecipeGame() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [gameMode, setGameMode] = useState<'menu' | 'learning' | 'cooking'>('menu')
  const [completedIngredients, setCompletedIngredients] = useState<boolean[]>([])
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([])
  const [score, setScore] = useState(0)
  const [completedRecipes, setCompletedRecipes] = useState<number[]>([])

  const startRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
    setGameMode('learning')
    setCurrentStep(0)
    setCompletedIngredients(new Array(recipe.ingredients.length).fill(false))
    setCompletedSteps(new Array(recipe.instructions.length).fill(false))
  }

  const startCooking = () => {
    setGameMode('cooking')
    setCurrentStep(0)
  }

  const completeIngredient = (index: number) => {
    const newCompleted = [...completedIngredients]
    newCompleted[index] = true
    setCompletedIngredients(newCompleted)
    setScore(score + 10)
  }

  const completeStep = (index: number) => {
    const newCompleted = [...completedSteps]
    newCompleted[index] = true
    setCompletedSteps(newCompleted)
    setScore(score + 20)
    
    if (newCompleted.every(step => step)) {
      setCompletedRecipes([...completedRecipes, selectedRecipe!.id])
    }
  }

  const resetGame = () => {
    setGameMode('menu')
    setSelectedRecipe(null)
    setCurrentStep(0)
    setCompletedIngredients([])
    setCompletedSteps([])
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-amber-100 text-amber-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (gameMode === 'menu') {
    return (
      <div className="w-full min-h-[600px] bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
              <Heading className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Chaat Recipe Master
              </Heading>
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <Text className="text-lg text-amber-800 max-w-2xl mx-auto">
              Learn to make authentic Indian chaat recipes through our interactive cooking game! 
              Master each recipe step by step and become a chaat expert.
            </Text>
            {score > 0 && (
              <div className="mt-4 flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <Text className="font-semibold text-yellow-800">Score: {score} points</Text>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Card 
                key={recipe.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/30 bg-gradient-to-br from-white to-amber-50"
                onClick={() => startRecipe(recipe)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-primary transition-colors">
                        {recipe.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getDifficultyColor(recipe.difficulty)}>
                          {recipe.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          {recipe.time}
                        </Badge>
                      </div>
                    </div>
                    {completedRecipes.includes(recipe.id) && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Star className="w-5 h-5 fill-current" />
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <Text className="text-sm font-semibold text-amber-800 mb-1">
                        Ingredients ({recipe.ingredients.length}):
                      </Text>
                      <Text className="text-sm text-amber-700 line-clamp-2">
                        {recipe.ingredients.slice(0, 3).join(', ')}
                        {recipe.ingredients.length > 3 && '...'}
                      </Text>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold">
                      Start Cooking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (gameMode === 'learning' && selectedRecipe) {
    return (
      <div className="w-full min-h-[600px] bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" onClick={resetGame} className="border-amber-300 text-amber-800 hover:bg-amber-100">
              ← Back to Menu
            </Button>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <Text className="font-semibold text-yellow-800">{score} points</Text>
            </div>
          </div>

          <div className="text-center mb-8">
            <Heading className="text-3xl font-bold text-amber-900 mb-2">
              {selectedRecipe.name}
            </Heading>
            <div className="flex items-center justify-center gap-4">
              <Badge className={getDifficultyColor(selectedRecipe.difficulty)}>
                {selectedRecipe.difficulty}
              </Badge>
              <Badge variant="outline" className="text-amber-700 border-amber-300">
                {selectedRecipe.time}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ingredients Section */}
            <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Circle className="w-5 h-5" />
                  Ingredients Checklist
                </h3>
                <div className="space-y-3">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        completedIngredients[index] 
                          ? 'bg-green-100 border border-green-300' 
                          : 'bg-white border border-amber-200 hover:border-amber-400'
                      }`}
                      onClick={() => !completedIngredients[index] && completeIngredient(index)}
                    >
                      {completedIngredients[index] ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Circle className="w-5 h-5 text-amber-600" />
                      )}
                      <Text className={`flex-1 ${completedIngredients[index] ? 'line-through text-green-700' : 'text-amber-800'}`}>
                        {ingredient}
                      </Text>
                      {!completedIngredients[index] && (
                        <Text className="text-xs text-amber-600">+10 pts</Text>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructions Section */}
            <Card className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Cooking Steps
                </h3>
                <div className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        completedSteps[index] 
                          ? 'bg-green-100 border border-green-300' 
                          : 'bg-white border border-orange-200 hover:border-orange-400'
                      }`}
                      onClick={() => !completedSteps[index] && completeStep(index)}
                    >
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-orange-600 bg-orange-100 rounded-full w-6 h-6 flex items-center justify-center">
                          {index + 1}
                        </span>
                        {completedSteps[index] ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-orange-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <Text className={`${completedSteps[index] ? 'line-through text-green-700' : 'text-orange-800'}`}>
                          {instruction}
                        </Text>
                        {!completedSteps[index] && (
                          <Text className="text-xs text-orange-600 mt-1">+20 pts</Text>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {completedSteps.every(step => step) && (
            <div className="mt-8 text-center">
              <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <Heading className="text-2xl font-bold text-green-800">
                      Recipe Completed!
                    </Heading>
                    <Star className="w-8 h-8 text-yellow-600 fill-current" />
                  </div>
                  <Text className="text-green-700 mb-4">
                    Congratulations! You've mastered {selectedRecipe.name}. 
                    Your delicious chaat is ready to serve!
                  </Text>
                  <Button 
                    onClick={resetGame}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold"
                  >
                    Try Another Recipe
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
} 