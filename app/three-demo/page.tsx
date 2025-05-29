import ThreeScene from '@/components/ThreeScene'
import RecipeGame from '@/components/RecipeGame'
import { Heading, Text } from '@/components/ui/typography'

export default function ThreeDemoPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* 3D Cooking Scene Section */}
        <div className="text-center mb-12">
          <Heading className="mb-4">
            Spice Life Kitchen Experience
          </Heading>
          <Text className="text-lg max-w-2xl mx-auto">
            Interactive 3D cooking scene featuring a professional stove and sautéing pan in action. 
            Watch the spices dance in the pan while steam rises! Use your mouse to explore the kitchen.
          </Text>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <ThreeScene />
        </div>
        
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Text className="text-sm text-muted-foreground">
            This 3D scene showcases realistic cooking animations with sautéing motion, 
            glowing burner effects, floating steam particles, and your Spice Life branding.
          </Text>
        </div>

        {/* Recipe Game Section */}
        <div className="text-center mb-12">
          <Heading className="mb-4">
            Learn Authentic Chaat Recipes
          </Heading>
          <Text className="text-lg max-w-2xl mx-auto">
            Master the art of Indian chaat making with our interactive recipe game. 
            Learn ingredients, follow step-by-step instructions, and earn points as you cook!
          </Text>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <RecipeGame />
        </div>
      </div>
    </div>
  )
} 