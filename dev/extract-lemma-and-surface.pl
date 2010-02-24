#!/usr/bin/perl

use warnings;
use strict;
use utf8;

binmode STDIN, ":encoding(UTF-8)";
binmode STDOUT, ":encoding(UTF-8)";

my @special_words = qw(User File Kategòrëjô Òbrôzk Image Kategoria Wiki Special Wikipedia meta Wikipedist òbrôzk Specjaln%C3%B4);
my @months = qw(strumiannika stëcznika marca łżëkwiôta môja lëpinca zélnika séwnika rujana lëstopadnika czerwińca gromicznika gòdnika);
my %prep = ('w', 'loc', 'do', 'gen', 'na', 'loc|acc', 'nad', 'ins');

my $special = join('|', @special_words);
my $month = join('|', @months);

while (<>)
{
	if (/w \[\[([^\|]*?)\|([^\]]*?)\]\]/)
	{
		next if $1 =~ m/$special/;
		next if $1 =~ m/\d+ $month/;
		next if $1 =~ m/[a-z][a-z]:/;
		next if $2 =~ m/[a-z][a-z][a-z]\./;
		print "$1: $2: loc\n";
	}

	if (/w \[\[([^\|\]]*?)\]\]([^\.;:,!? ]+)/)
	{
		next if $1 =~ m/$special/;
		next if $1 =~ m/\d+ $month/;
		next if $1 =~ m/[a-z][a-z]:/;
		print "$1: $1$2: loc\n";
	}

	if (/\[\[([^\|]*?)\|([^\]]*?)\]\]/)
	{
		next if $1 =~ m/$special/;
		next if $1 =~ m/\d+ $month/;
		next if $1 =~ m/[a-z][a-z]:/;
		next if $2 =~ m/[a-z][a-z][a-z]\./;
		print "$1: $2\n";
	}
}

