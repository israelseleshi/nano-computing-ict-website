'use client';
import { useState } from 'react';
import { summarizeAboutUs, type SummarizeAboutUsOutput } from '@/ai/flows/summarize-about-us-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Lightbulb, BarChart } from 'lucide-react';

const aboutUsContent = `
Nano Computing and ICT Solutions started its operation in 2012 as a computer and accessories sales and services center. With time it has established itself as one of the major ICT solution providers in Bangladesh. Nano Computing is currently working with both Private and Government organizations. We are a group of ICT professionals with the motto to provide the best possible ICT solution to our clients. Our vision is to be a leading ICT company in Bangladesh. Our mission is to provide appropriate ICT solution to our clients. We believe in quality service and customer satisfaction.
`;

export default function AboutUsSummary() {
  const [summaryData, setSummaryData] = useState<SummarizeAboutUsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await summarizeAboutUs({ aboutUsContent });
      setSummaryData(result);
    } catch (e) {
      setError('Failed to generate summary. Please try again.');
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <Card className="bg-background shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary font-headline">AI-Powered Insights</CardTitle>
        <CardDescription>Click the button to generate a summary and key insights from our company profile using AI.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <Button onClick={handleSummarize} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Summary'
            )}
          </Button>
          {error && <p className="mt-4 text-destructive">{error}</p>}
        </div>

        {summaryData && (
          <div className="mt-6 grid md:grid-cols-2 gap-8 animate-fade-in-up">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-primary">
                <BarChart className="w-6 h-6"/>
                Summary
              </h3>
              <p className="text-muted-foreground">{summaryData.summary}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-2 text-primary">
                <Lightbulb className="w-6 h-6"/>
                Key Insights
              </h3>
              <p className="text-muted-foreground">{summaryData.keyInsights}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
