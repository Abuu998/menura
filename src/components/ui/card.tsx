import { cn } from "@/lib/utils";
import { Card as RNPCard } from "react-native-paper";
import { withUniwind } from "uniwind";

const PaperCard = withUniwind(RNPCard);
const PaperCardTitle = withUniwind(RNPCard.Title);
const PaperCardContent = withUniwind(RNPCard.Content);
const PaperCardActions = withUniwind(RNPCard.Actions);
const PaperCardCover = withUniwind(RNPCard.Cover);

function Card({ className, ...props }: React.ComponentProps<typeof PaperCard>) {
  return (
    <PaperCard
      className={cn("bg-card text-card-foreground", className)}
      {...props}
    />
  );
}

function CardTitle({
  titleClassName,
  ...props
}: React.ComponentProps<typeof PaperCardTitle>) {
  return (
    <PaperCardTitle
      titleClassName={cn("text-2xl", titleClassName)}
      {...props}
    />
  );
}

function CardContent(props: React.ComponentProps<typeof PaperCardContent>) {
  return <PaperCardContent {...props} />;
}

function CardActions(props: React.ComponentProps<typeof PaperCardActions>) {
  return <PaperCardActions {...props} />;
}

function CardCover(props: React.ComponentProps<typeof PaperCardCover>) {
  return <PaperCardCover {...props} />;
}

export { Card, CardActions, CardContent, CardCover, CardTitle };
