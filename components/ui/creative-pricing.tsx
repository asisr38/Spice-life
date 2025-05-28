import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

interface CreativePricingProps {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
    priceUnit?: string;
    className?: string;
    cardClassName?: string;
    titleClassName?: string;
    priceClassName?: string;
    descriptionClassName?: string;
    featureClassName?: string;
}

function CreativePricing({
    tag = "Simple Pricing",
    title = "Make Short Videos That Pop",
    description = "Edit, enhance, and go viral in minutes",
    tiers,
    priceUnit = "/person",
    className,
    cardClassName,
    titleClassName,
    priceClassName,
    descriptionClassName,
    featureClassName,
}: CreativePricingProps) {
    return (
        <div className={cn("w-full max-w-6xl mx-auto px-4", className)}>
            <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-16">
                <div className="font-serif text-lg sm:text-xl text-primary rotate-[-1deg]">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className={cn("text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground rotate-[-1deg]", titleClassName)}>
                        {title}
                        <div className="absolute -right-12 top-0 text-amber-500 rotate-12">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-primary -rotate-12">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-primary/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className={cn("font-serif text-base sm:text-lg text-muted-foreground rotate-[-1deg]", descriptionClassName)}>
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]",
                            cardClassName
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-card",
                                "border-2 border-border",
                                "rounded-lg shadow-[4px_4px_0px_0px] shadow-border",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-4 sm:p-6">
                            {tier.popular && (
                                <div
                                    className="absolute -top-2 -right-2 bg-primary text-primary-foreground 
                                    font-serif px-3 py-1 rounded-full rotate-12 text-sm border-2 border-border"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-4 sm:mb-6">
                                <div
                                    className={cn(
                                        "w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-3 sm:mb-4",
                                        "flex items-center justify-center",
                                        "border-2 border-border",
                                        `text-${tier.color}-500`
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className={cn("font-serif text-xl sm:text-2xl font-semibold text-foreground", titleClassName)}>
                                    {tier.name}
                                </h3>
                                <p className={cn("font-serif text-sm sm:text-base text-muted-foreground mt-1", descriptionClassName)}>
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-4 sm:mb-6 font-serif">
                                <span className={cn("text-2xl sm:text-4xl font-bold text-foreground", priceClassName)}>
                                    ${tier.price}
                                </span>
                                <span className="text-sm sm:text-base text-muted-foreground ml-1">
                                    {priceUnit}
                                </span>
                            </div>

                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-2 sm:gap-3"
                                    >
                                        <div
                                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-border 
                                            flex items-center justify-center bg-primary/10"
                                        >
                                            <Check className="w-2 h-2 sm:w-3 sm:h-3 text-primary" />
                                        </div>
                                        <span className={cn("font-serif text-sm sm:text-base text-foreground", featureClassName)}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-10 sm:h-12 font-serif text-base sm:text-lg relative",
                                    "border-2 border-border",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-border",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                              "bg-primary text-primary-foreground",
                                              "hover:bg-primary/90",
                                              "active:bg-primary",
                                          ]
                                        : [
                                              "bg-secondary text-secondary-foreground",
                                              "hover:bg-secondary/90",
                                              "active:bg-secondary",
                                          ]
                                )}
                            >
                                Book Catering
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden">
                <div className="absolute top-40 left-20 text-4xl rotate-12">
                    ✎
                </div>
                <div className="absolute bottom-40 right-20 text-4xl -rotate-12">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing, type PricingTier } 